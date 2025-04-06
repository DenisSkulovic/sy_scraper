from motor.motor_asyncio import AsyncIOMotorClient
from app.models.scrape_result import ScrapeResult
from app.config import MONGO_URI, DB_NAME, COLLECTION_NAME

class ResultRepository:
    def __init__(self):
        self.client = AsyncIOMotorClient(MONGO_URI)
        self.collection = self.client[DB_NAME][COLLECTION_NAME]

    async def save_result(self, result: ScrapeResult):
        print("[ResultRepository - save_result] result", result)
        await self.collection.insert_one(result.to_dict())
        print("[ResultRepository - save_result] saved to DB", result)
