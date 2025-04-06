import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Scrape from './pages/Scrape';
import Results from './pages/Results';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const App = () => (
  <Router>
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button color="inherit" component={Link} to="/">HOME</Button>
          <Button color="inherit" component={Link} to="/scrape">SCRAPE</Button>
          <Button color="inherit" component={Link} to="/results">RESULTS</Button>
        </Box>
      </Toolbar>
    </AppBar>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scrape" element={<Scrape />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  </Router>
);

export default App;