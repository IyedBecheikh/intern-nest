import { JobCard } from "./job-card"
import prismadb from "@/lib/prismadb"

const StaticFeaturedInternships = [
  {
    slug: "frontend-intern-google",
    title: "Frontend Developer Intern",
    description: "Join our team as a Frontend Developer Intern and work on exciting projects that impact millions of users.",
    company: "Google",
    logoUrl: "https://logo.clearbit.com/google.com",
    location: "Mountain View, CA",
    type: "Internship",
    postedAt: "2 days ago",
    experience: "Entry-Level",
    salary: "$3,000/mo",
    isRemote: true,
    tags: ["JavaScript", "React", "Summer 2025"],
    source: "RemoteOK"
  },
  {
    slug: "backend-intern-facebook",
    title: "Backend Developer Intern",
    description: "Join our team as a Backend Developer Intern and work on exciting projects that impact millions of users.",
    company: "Facebook",
    logoUrl: "https://logo.clearbit.com/facebook.com",
    location: "Menlo Park, CA",
    type: "Internship",
    postedAt: "1 week ago",
    experience: "Entry-Level",
    salary: "$3,500/mo",
    isRemote: false,
    tags: ["Python", "Django", "Summer 2025"],
    source: "RemoteOK"
  }
]



export const Featured =  async () => {

  // Get featured internships and jobs from the database prismadb
  const FeaturedInternships = await prismadb.job.findMany()


  // Convert the data to Job type
  const jobs = FeaturedInternships.map(job => ({
    slug: job.slug,
    title: job.title,
    company: job.company,
    logoUrl: job.logoUrl,
    location: job.location,
    type: job.type,
    // Convert postedAt to a readable format
    postedAt: new Date(job.postedAt).toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }),
    experience: job.experience,
    salary: job.salary,
    isRemote: job.isRemote,
    tags: job.tags || [],
    source: job.source,
    description: job.description,
    requirements: job.requirements || []
  }));
  console.log("Mapped Jobs:", jobs);

  return (
    <div className="bg-secondary p-8 rounded-xl w-4/5 mx-auto">
        <h1 className="text-2xl font-bold mb-4">
            Featured Internships and Jobs
        </h1>

        <section className="container py-8 grid gap-6">
            {jobs.map((job) => (
                <JobCard key={job.slug} job={job} />
            ))}
            
        
    </section>
    </div>
  )
}
