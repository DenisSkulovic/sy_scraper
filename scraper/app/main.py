from fastapi import FastAPI, HTTPException
from app.services.scraper_service import ScraperService
from app.schemas.scrape import ScrapeRequest, ScrapeResponse

app = FastAPI()
scraper_service = ScraperService()

@app.post("/scrape", response_model=ScrapeResponse)
async def scrape_url(request: ScrapeRequest):
    try:
        print("[main] scraping url: ", request.url)
        result = await scraper_service.scrape_and_store(request.url)
        print("[main] result: ", result)
        return result
    except Exception as e:
        print("[main] error: ", e)
        raise HTTPException(status_code=500, detail=str(e))
