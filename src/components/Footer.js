import React from 'react';
import { Link, Typography, Box } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ padding: '20px', textAlign: 'center', marginTop: 'auto', width: '100%' }}>
            <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                Diese Webseite wurde im Rahmen einer Berufsmaturitätsarbeit von Jonas Züst, Aaron Rhyner und Eleni Müller geschrieben.
            </Typography>
            <Typography variant="body1" sx={{ marginTop: '10px', marginBottom: '10px' }}>
                &copy; 2025 &ndash; Alle Rechte vorbehalten.
            </Typography>
            <Link href="/quellen" sx={{ color: '#FF1E00', textDecoration: 'none' }}>
                Quellen
            </Link>
        </Box>
    );
};

export default Footer;