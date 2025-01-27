import React from 'react';
import { Link, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ padding: '20px', backgroundColor: '#f0f4f8', textAlign: 'center', marginTop: 'auto' }}>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                Diese Website wurde im Rahmen einer Berufsmaturitätsarbeit von Jonas Züst, Aaron Rhyner und Eleni Müller geschrieben.
            </Typography>
            <Link href="/quellen" sx={{ color: '#FF1E00', textDecoration: 'none' }}>
                Quellen
            </Link>
        </Box>
    );
};

export default Footer;