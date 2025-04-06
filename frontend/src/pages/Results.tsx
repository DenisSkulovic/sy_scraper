import { useResults } from '../hooks/useResults';
import { Box, CircularProgress } from '@mui/material';
import ResultsTable from '../components/ResultsTable';

const Results = () => {
    const { results, loading } = useResults();

    return loading ? (
        <Box sx={{ textAlign: 'center', p: 4 }}>
            <CircularProgress />
        </Box>
    ) : (
        <ResultsTable results={results} />
    );
};

export default Results;