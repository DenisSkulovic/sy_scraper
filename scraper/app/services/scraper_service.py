from app.repositories.result_repository import ResultRepository
from app.models.scrape_result import ScrapeResult
from app.schemas.scrape import ScrapeResponse
from bs4 import BeautifulSoup
from datetime import datetime
import requests
from urllib.parse import urlparse, urljoin
from typing import Set

class ScraperService:
    def __init__(self):
        self.repo = ResultRepository()

    def _extract_links(self, html: str, base_url: str) -> (Set[str], Set[str]):
        print("[ScraperService - _extract_links] html length: ", len(html))
        print("[ScraperService - _extract_links] base_url: ", base_url)
        soup = BeautifulSoup(html, 'html.parser')
        urls = set()
        domains = set()

        for tag in soup.find_all(['a', 'link', 'script', 'img']):
            attr = tag.get('href') or tag.get('src')
            print("[ScraperService - _extract_links] attr: ", attr)
            full_url = urljoin(str(base_url), str(attr))
            print("[ScraperService - _extract_links] full_url: ", full_url)
            urls.add(full_url)
            print("[ScraperService - _extract_links] urls length: ", len(urls))
            domain = urlparse(full_url).netloc
            print("[ScraperService - _extract_links] domain: ", domain)
            if domain:
                domains.add(domain)

        print("[ScraperService - _extract_links] extracted domains length: ", len(domains))
        print("[ScraperService - _extract_links] extracted urls length: ", len(urls))
        return domains, urls

    async def scrape_and_store(self, url: str) -> ScrapeResponse:
        print("[ScraperService - scrape_and_store] url: ", url)
        resp = requests.get(url, timeout=10)
        resp.raise_for_status()

        domains, urls = self._extract_links(resp.text, url)
        timestamp = datetime.utcnow()

        result = ScrapeResult(
            url=str(url),
            domains=list(domains),
            urls=list(urls),
            timestamp=timestamp,
        )

        print("[ScraperService - scrape_and_store] got result")
        await self.repo.save_result(result)
        print("[ScraperService - scrape_and_store] saved to DB")
        response = ScrapeResponse(
            url=str(url),
            domains=list(domains),
            urls=list(urls),
            timestamp=timestamp,
        )
        print("[ScraperService - scrape_and_store] response: ", response)
        return response
