from scrapy.crawler import CrawlerProcess
from scrapy.utils.project import get_project_settings
from jobspider.spiders.weworkremotely import WeWorkRemotelySpider
from jobspider.spiders.weworkremotely_rss import parse_wwr_rss
from jobspider.prisma_importer import insert_job

# process = CrawlerProcess(get_project_settings())
# process.crawl(WeWorkRemotelySpider)
# process.start()

# Get generated jobs from RSS feed
parse_wwr_rss()

for job in parse_wwr_rss():
    insert_job(job)