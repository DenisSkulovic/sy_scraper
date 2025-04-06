from pydantic import BaseModel, HttpUrl
from typing import List
from datetime import datetime

class ScrapeRequest(BaseModel):
    url: HttpUrl

class ScrapeResponse(BaseModel):
    url: HttpUrl
    domains: List[str]
    urls: List[str]
    timestamp: datetime
