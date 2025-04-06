import axios from 'axios';
import { ScrapeRequest, ScrapeResult } from '../types/scraper';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3001';

export const triggerScrape = async (payload: ScrapeRequest): Promise<ScrapeResult> => {
    const response = await axios.post(`${API_BASE}/scraper`, payload);
    return response.data;
};

export const getScrapeResults = async (): Promise<ScrapeResult[]> => {
    const response = await axios.get(`${API_BASE}/scraper`);
    return response.data;
};