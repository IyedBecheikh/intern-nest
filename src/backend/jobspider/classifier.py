import re
import json
from typing import Dict, List, Optional, Union
from dataclasses import dataclass
from enum import Enum
import logging

import psycopg2

class ExperienceLevel(Enum):
    ENTRY = "Entry"
    JUNIOR = "Junior" 
    MID = "Mid"
    SENIOR = "Senior"
    LEAD = "Lead"
    EXECUTIVE = "Executive"

@dataclass
class Job:
    slug: str
    title: str
    company: str
    location: str
    type: str
    posted_at: str
    experience: str
    description: str
    apply_url: str
    logo_url: Optional[str] = None
    salary: Optional[str] = None
    is_remote: Optional[bool] = None
    source: Optional[str] = None

class JobExperienceClassifier:
    def __init__(self):
        # Experience level keywords and patterns
        self.experience_patterns = {
            ExperienceLevel.ENTRY: {
                'keywords': [
                    'entry level', 'entry-level', 'graduate', 'junior', 'intern',
                    'trainee', 'associate', 'beginner', 'new grad', 'recent graduate',
                    'no experience', '0-1 year', '0-2 years', 'fresh graduate'
                ],
                'negative_keywords': ['senior', 'lead', 'principal', 'architect', 'manager'],
                'year_range': (0, 2)
            },
            ExperienceLevel.JUNIOR: {
                'keywords': [
                    'junior', '1-2 years', '1-3 years', '2-3 years',
                    'early career', 'associate'
                ],
                'negative_keywords': ['senior', 'lead', 'principal', 'architect', 'manager'],
                'year_range': (1, 3)
            },
            ExperienceLevel.MID: {
                'keywords': [
                    'mid-level', 'mid level', '3-5 years', '2-4 years', '3-6 years',
                    '4-6 years', 'intermediate', 'experienced'
                ],
                'negative_keywords': ['senior', 'lead', 'principal', 'junior', 'entry'],
                'year_range': (2, 6)
            },
            ExperienceLevel.SENIOR: {
                'keywords': [
                    'senior', '5+ years', '4+ years', '6+ years', '7+ years',
                    'sr.', 'sr', 'expert', 'specialist', 'experienced'
                ],
                'negative_keywords': ['junior', 'entry', 'associate', 'intern'],
                'year_range': (4, 10)
            },
            ExperienceLevel.LEAD: {
                'keywords': [
                    'lead', 'team lead', 'tech lead', 'technical lead', 'principal',
                    'staff', 'architect', '8+ years', '10+ years', 'leadership'
                ],
                'negative_keywords': ['junior', 'entry', 'associate'],
                'year_range': (6, 15)
            },
            ExperienceLevel.EXECUTIVE: {
                'keywords': [
                    'director', 'vp', 'vice president', 'cto', 'ceo', 'head of',
                    'chief', 'executive', 'manager', '10+ years', '15+ years'
                ],
                'negative_keywords': ['junior', 'entry', 'associate', 'intern'],
                'year_range': (8, 30)
            }
        }
        
        # Compile regex patterns for efficiency
        self.year_patterns = [
            re.compile(r'(\d+)[-\+]\s*years?', re.IGNORECASE),
            re.compile(r'(\d+)\s*to\s*(\d+)\s*years?', re.IGNORECASE),
            re.compile(r'(\d+)\s*-\s*(\d+)\s*years?', re.IGNORECASE),
            re.compile(r'minimum\s*(\d+)\s*years?', re.IGNORECASE),
            re.compile(r'at\s*least\s*(\d+)\s*years?', re.IGNORECASE)
        ]

    def extract_years_from_text(self, text: str) -> List[int]:
        """Extract year requirements from text"""
        years = []
        
        for pattern in self.year_patterns:
            matches = pattern.findall(text)
            for match in matches:
                if isinstance(match, tuple):
                    # Range pattern (e.g., "3-5 years")
                    years.extend([int(x) for x in match if x.isdigit()])
                else:
                    # Single number pattern (e.g., "5+ years")
                    if match.isdigit():
                        years.append(int(match))
        
        return years

    def calculate_experience_score(self, text: str, level: ExperienceLevel) -> float:
        """Calculate confidence score for a given experience level"""
        text_lower = text.lower()
        patterns = self.experience_patterns[level]
        score = 0.0
        
        # Keyword matching
        keyword_matches = sum(1 for keyword in patterns['keywords'] 
                            if keyword in text_lower)
        score += keyword_matches * 2
        
        # Negative keyword penalty
        negative_matches = sum(1 for keyword in patterns['negative_keywords'] 
                             if keyword in text_lower)
        score -= negative_matches * 1.5
        
        # Year range matching
        years = self.extract_years_from_text(text)
        if years:
            min_year, max_year = patterns['year_range']
            for year in years:
                if min_year <= year <= max_year:
                    score += 1.5
                elif year < min_year:
                    score -= 0.5
                elif year > max_year:
                    score -= 0.3
        
        # Title-based scoring (higher weight for title matches)
        title_score = 0
        for keyword in patterns['keywords']:
            if keyword in text_lower.split('\n')[0]:  # First line assumed to be title
                title_score += 3
        
        score += title_score
        
        return max(0, score)

    def classify_job(self, job_data: Union[Job, Dict]) -> str:
        """Classify job experience level"""
        
        # Handle different input types
        if isinstance(job_data, dict):
            title = job_data.get('title', '')
            description = job_data.get('description', '')
            requirements = job_data.get('requirements', [])
        else:
            title = job_data.title
            description = job_data.description
            requirements = job_data.requirements or []
        
        # Combine all text for analysis
        combined_text = f"{title}\n{description}"
        if requirements:
            if isinstance(requirements, list):
                combined_text += "\n" + "\n".join(requirements)
            else:
                combined_text += f"\n{requirements}"
        
        # Calculate scores for each experience level
        scores = {}
        for level in ExperienceLevel:
            scores[level] = self.calculate_experience_score(combined_text, level)
        
        # Find the highest scoring level
        best_level = max(scores.items(), key=lambda x: x[1])
        
        # If no clear winner (all scores very low), try to infer from common patterns
        if best_level[1] < 1:
            return self._fallback_classification(combined_text)
        
        return best_level[0].value

    def _fallback_classification(self, text: str) -> str:
        """Fallback classification when no clear patterns match"""
        text_lower = text.lower()
        
        # Simple heuristics
        if any(word in text_lower for word in ['intern', 'graduate', 'entry']):
            return ExperienceLevel.ENTRY.value
        elif any(word in text_lower for word in ['senior', 'sr.', 'expert']):
            return ExperienceLevel.SENIOR.value
        elif 'lead' in text_lower or 'principal' in text_lower:
            return ExperienceLevel.LEAD.value
        elif any(word in text_lower for word in ['director', 'manager', 'head']):
            return ExperienceLevel.EXECUTIVE.value
        else:
            # Default to mid-level if nothing else matches
            return ExperienceLevel.MID.value

    def classify_multiple_jobs(self, jobs: List[Union[Job, Dict]]) -> List[Dict]:
        """Classify multiple jobs and return results"""
        results = []
        
        for job in jobs:
            try:
                experience_level = self.classify_job(job)
                
                if isinstance(job, dict):
                    result = job.copy()
                    result['experience'] = experience_level
                else:
                    result = {
                        'title': job.title,
                        'company': job.company,
                        'experience': experience_level,
                        'original_data': job
                    }
                
                results.append(result)
                
            except Exception as e:
                logging.error(f"Error classifying job: {e}")
                # Add with unknown classification
                if isinstance(job, dict):
                    result = job.copy()
                    result['experience'] = 'Unknown'
                else:
                    result = {
                        'title': job.title,
                        'company': job.company,
                        'experience': 'Unknown',
                        'original_data': job
                    }
                results.append(result)
        
        return results

# Usage example and testing
def test_classifier():
    """Test the classifier with sample data"""
    classifier = JobExperienceClassifier()
    
    # Sample job data (similar to your Two Dot AI example)
    sample_jobs = [
        {
            'title': 'Senior AI Engineer',
            'company': 'Two Dot AI',
            'description': '''4+ years shipping production code. Deep Python expertise. 
            Strong Google Cloud Platform experience. Proven distributed systems and API design skills.''',
            'requirements': ['4+ years shipping production code', 'Deep Python expertise']
        },
        {
            'title': 'Junior Software Developer',
            'company': 'Tech Startup',
            'description': 'Entry level position for recent graduates. 0-2 years experience required.',
            'requirements': ['Recent graduate', 'Basic programming knowledge']
        },
        {
            'title': 'Lead Backend Engineer',
            'company': 'Enterprise Corp',
            'description': 'Technical leadership role requiring 8+ years experience. Lead a team of engineers.',
            'requirements': ['8+ years experience', 'Leadership experience']
        }
    ]
    
    # Classify jobs
    results = classifier.classify_multiple_jobs(sample_jobs)
    
    # Print results
    for result in results:
        print(f"Title: {result['title']}")
        print(f"Company: {result['company']}")
        print(f"Experience Level: {result['experience']}")
        print("-" * 50)
