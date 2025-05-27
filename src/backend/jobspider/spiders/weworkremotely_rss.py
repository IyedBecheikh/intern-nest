import feedparser
from datetime import datetime

RSS_URL = "https://weworkremotely.com/categories/remote-full-stack-programming-jobs.rss"

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
        job_data = {
            "title": title,
            "company": company,
            "description": cleanze_html(description),
            "location": "Remote",
            "type": "Full-Time",
            "experience": "Entry",
            "slug": slug,
            "source": "WeWorkRemotely",
            "posted_at": pub_date,
            "logo_url": logo_url,
            "is_remote": True,
        }

        yield(job_data)


def cleanze_html(html):
    """
    Cleans the HTML content by removing unwanted tags and attributes.
    """
    from bs4 import BeautifulSoup

    soup = BeautifulSoup(html, "html.parser")
    for script in soup(["script", "style"]):
        script.decompose()
    print(soup.get_text())
    return soup.get_text()