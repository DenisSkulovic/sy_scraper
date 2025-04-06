import { useState } from 'react';
import { triggerScrape } from '../api/scraper';
import { ScrapeResult } from '../types/scraper';

export const useScrape = () => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<ScrapeResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const scrape = async (url: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await triggerScrape({ url });
            setResult(data);
        } catch (err: any) {
            setError(err.response?.data?.detail || 'Scraping failed.');
        } finally {
            setLoading(false);
        }
    };

    return { scrape, loading, result, error };
};
