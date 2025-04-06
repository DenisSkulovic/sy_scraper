import { Box, Button, TextField, Alert } from '@mui/material';
import { ScrapeResult } from '../types/scraper';
import { useState } from 'react';

interface Props {
    onSubmit: (url: string) => void;
    loading: boolean;
    error: string | null;
    result: ScrapeResult | null;
}

const ScrapeForm = ({ onSubmit, loading, error, result }: Props) => {
    const [url, setUrl] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (url) onSubmit(url);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <TextField
                label="Website URL"
                variant="outlined"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button variant="contained" type="submit" disabled={loading}>
                {loading ? 'Scraping...' : 'Scrape'}
            </Button>

            {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}
            {result && (
                <Alert severity="success" sx={{ mt: 2 }}>
                    Scraped {result.domains.length} domains and {result.urls.length} URLs.
                </Alert>
            )}
        </Box>
    );
};

export default ScrapeForm;