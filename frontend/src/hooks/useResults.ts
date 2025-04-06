import { useEffect, useState } from 'react';
import { getScrapeResults } from '../api/scraper';
import { ScrapeResult } from '../types/scraper';

export const useResults = () => {
    const [results, setResults] = useState<ScrapeResult[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchResults = async () => {
        setLoading(true);
        try {
            const data = await getScrapeResults();
            setResults(data);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchResults();
    }, []);

    return { results, loading, refresh: fetchResults };
};