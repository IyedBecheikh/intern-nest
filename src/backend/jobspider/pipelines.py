# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
from jobspider.prisma_importer import insert_job

class JobspiderPipeline:
    def process_item(self, item, spider):
        insert_job(item)
        return item
