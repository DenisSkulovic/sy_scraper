import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => (
    <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>Cymulate Scraper</Typography>
                <Button color="inherit" component={Link} to="/">Home</Button>
                <Button color="inherit" component={Link} to="/scrape">Scrape</Button>
                <Button color="inherit" component={Link} to="/results">Results</Button>
            </Toolbar>
        </AppBar>
        <Container sx={{ mt: 4 }}>{children}</Container>
    </>
);

export default Layout;