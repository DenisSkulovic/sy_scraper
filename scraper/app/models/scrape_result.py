from datetime import datetime
from typing import List

class ScrapeResult:
    def __init__(self, url: str, domains: List[str], urls: List[str], timestamp: datetime):
        self.url = url
        self.domains = domains
        self.urls = urls
        self.timestamp = timestamp

    def to_dict(self):
        return {
            "url": self.url,
            "domains": self.domains,
            "urls": self.urls,
            "timestamp": self.timestamp,
        }