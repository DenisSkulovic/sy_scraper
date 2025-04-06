import os

MONGO_HOST = os.getenv("MONGO_HOST", "mongodb")
print("[config] MONGO_HOST: ", MONGO_HOST)
MONGO_PORT = os.getenv("MONGO_PORT", "27017")
print("[config] MONGO_PORT: ", MONGO_PORT)
MONGO_DB = os.getenv("MONGO_DB", "scraperdb")
print("[config] MONGO_DB: ", MONGO_DB)

MONGO_URI = f"mongodb://{MONGO_HOST}:{MONGO_PORT}"
print("[config] MONGO_URI: ", MONGO_URI)
DB_NAME = MONGO_DB
print("[config] DB_NAME: ", DB_NAME)

COLLECTION_NAME = "results"
print("[config] COLLECTION_NAME: ", COLLECTION_NAME)