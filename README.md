# Cymulate Scraper

A full-stack web application for scraping and visualizing domains and URLs from a given website.

This project was developed as a senior developer assignment. It features a Python-based scraping service, a NestJS backend API, and a React (Vite + TypeScript) frontend — all containerized with Docker.

---

## 🧠 Stack Overview

| Layer     | Tech                         |
|-----------|------------------------------|
| Scraper   | Python + FastAPI + Requests  |
| Backend   | Node.js + NestJS + Mongoose |
| Frontend  | React + TypeScript + MUI    |
| Database  | MongoDB                     |
| DevOps    | Docker + Docker Compose     |

---

## 📦 Features

- 🔎 Scrapes a target website for all linked domains and URLs.
- 📅 Stores each scrape session in MongoDB with a timestamp.
- 🔗 Fetches and displays past scrape results.
- 📤 Triggers the Python scraper from the NestJS backend via internal API.
- 🐳 Full containerized deployment via Docker Compose.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DenisSkulovic/sy_scraper.git
cd sy_scraper
```

### 2. Run with Docker Compose

```bash
docker-compose up --build
```

This will start:

- MongoDB on port **27017**
- Scraper on port **8000** (internal)
- Backend API on port **3001**
- Frontend on port **5173**

---

## 💻 Frontend

### Local Development

```bash
cd frontend
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## 📡 Backend (NestJS)

### Local Development

```bash
cd backend
npm install
npm run start:dev
```

API will run at [http://localhost:3001](http://localhost:3001)

### API Endpoints

- `POST /scraper` — Trigger scraping (JSON body: `{ "url": "https://example.com" }`)
- `GET /results` — Get past results

---

## 🕷️ Python Scraper

### Local Development

```bash
cd scraper
pipenv install
pipenv run uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

> Requires Python 3.10+ and `pipenv`.

---

## 🛠️ Folder Structure

```bash
.
├── backend        # NestJS API
├── frontend       # React frontend (Vite + MUI)
├── scraper        # Python scraper (FastAPI)
├── docker-compose.yml
```

---

## 🧪 Example Target

Use this site for testing:

```
https://books.toscrape.com/
```

---

## 📝 Environment Variables

All services rely on internal Docker networking. You can modify connection strings in `.env` files if needed.