import { useScrape } from '../hooks/useScrape';
import ScrapeForm from '../components/ScrapeForm';

const Scrape = () => {
    const { scrape, loading, result, error } = useScrape();

    const handleSubmit = (url: string) => {
        scrape(url);
    };

    return (
        <ScrapeForm
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            result={result}
        />
    );
};

export default Scrape;