import { Typography, Box } from '@mui/material';

const Home = () => (
    <Box textAlign="center" mt={8}>
        <Typography variant="h3">Welcome to the Cymulate Scraper</Typography>
        <Typography variant="subtitle1" mt={2}>
            Use the navigation bar to scrape a website or view scraping history.
        </Typography>
    </Box>
);

export default Home;