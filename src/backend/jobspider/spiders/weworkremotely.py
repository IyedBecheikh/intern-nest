import scrapy

class WeWorkRemotelySpider(scrapy.Spider):
    name = "weworkremotely"
    start_urls = ["https://weworkremotely.com/categories/remote-programming-jobs"]

    def parse(self, response):
        for job in response.css(".jobs li a"):
            link = job.attrib["href"]
            if not link.startswith("/remote-jobs/"):
                continue
            yield response.follow(link, callback=self.parse_job)

    def parse_job(self, response):
        yield {
            "title": response.css("h1::text").get(),
            "company": response.css(".company-card h2::text").get(),
            "location": response.css(".listing-header-container span::text").get(),
            "description": response.css(".listing-container").get(),
            "tags": response.css(".listing-tag::text").getall(),
            "slug": response.url.split("/")[-1],
            "source": "WeWorkRemotely",
        }
