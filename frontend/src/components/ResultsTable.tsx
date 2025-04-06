import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography
} from '@mui/material';
import { ScrapeResult } from '../types/scraper';
import { format } from 'date-fns';

interface Props {
    results: ScrapeResult[];
}

const ResultsTable = ({ results }: Props) => (
    <TableContainer component={Paper} sx={{ maxWidth: 900, mx: 'auto', mt: 4 }}>
        <Typography variant="h6" sx={{ p: 2 }}>Scraping Results</Typography>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>URL</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Domain Count</TableCell>
                    <TableCell>URL Count</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {results.map((r, idx) => (
                    <TableRow key={idx}>
                        <TableCell>{r.url}</TableCell>
                        <TableCell>{format(new Date(r.timestamp), 'yyyy-MM-dd HH:mm:ss')}</TableCell>
                        <TableCell>{r.domains.length}</TableCell>
                        <TableCell>{r.urls.length}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default ResultsTable;