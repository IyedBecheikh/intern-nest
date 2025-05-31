from jobspider.classifier import JobExperienceClassifier
import feedparser
from datetime import datetime

RSS_URL = "https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss"


classifier = JobExperienceClassifier()

def parse_wwr_rss():
    feed = feedparser.parse(RSS_URL)
    for entry in feed.entries:
  
        title = entry.title.split(":")[1].strip() if ":" in entry.title else "Unknown"
        company = entry.title.split(":")[0].strip() if ":" in entry.title else entry.title
        logo_url = entry.media_content[0]['url'] if 'media_content' in entry and entry.media_content else None
        link = entry.link
        description = entry.description
        pub_date = datetime(*entry.published_parsed[:6])
        slug = link.rstrip("/").split("/")[-1]
        region = entry.region
        job_type = entry.type
        job_data = {
            "title": title,
            "company": company,
            "description": description,
            "location": region,
            "type": job_type,
            "experience": classifier.classify_job({
                "title": title,
                "company": company,
                "description": description,
                "location": region,
                "type": job_type
            }),
            "slug": slug,
            "source": "WeWorkRemotely",
            "posted_at": pub_date,
            "logo_url": logo_url,
            "is_remote": True,
            "apply_url": link
        }

        yield(job_data)


def clean_html(html: str) -> str:
    """
    Sanitizes and preserves HTML formatting for safe frontend rendering.
    Keeps formatting tags like <p>, <strong>, <a>, etc.
    """
    soup = BeautifulSoup(html, "html.parser")

    # Remove script, style, comments
    for tag in soup(["script", "style"]):
        tag.decompose()

    for comment in soup.find_all(string=lambda text: isinstance(text, Comment)):
        comment.extract()

    # Allow only safe tags and attributes
    allowed_tags = {
        "p", "br", "strong", "em", "ul", "ol", "li", "a", "img", "h1", "h2", "h3", "h4", "h5", "h6"
    }
    allowed_attrs = {
        "href", "src", "alt", "title", "width", "height"
    }

    for tag in soup.find_all(True):
        if tag.name not in allowed_tags:
            tag.unwrap()
            continue
        tag.attrs = {key: value for key, value in tag.attrs.items() if key in allowed_attrs}

    return str(soup)