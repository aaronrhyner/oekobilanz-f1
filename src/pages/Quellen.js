import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const sources = [
    {
        title: 'Reifen - Popup',
        links: [
            { text: 'Formel-1-Regeln 2024: Sportliches Formel-1-Reglement', url: 'https://www.motorsport-total.com/formel-1/reglement-regeln/sportliches-reglement' },
            { text: 'Formel-1-Liveticker: Pirelli zeigt die Reifen für die Tests', url: 'https://www.motorsport-total.com/formel-1/news/formel-1-liveticker-pirelli-zeigt-die-reifen-fuer-die-tests-24022001/' },
            { text: 'Was passiert eigentlich mit gebrauchten Formel-1-Reifen?', url: 'https://www.motorsport-total.com/formel-1/news/was-passiert-eigentlich-mit-gebrauchten-formel-1-reifen-23122703/' },
        ],
    },
    {
        title: 'Logistik Page',
        links: [
            { text: 'F1 Impact Report 2023', url: 'https://corp.formula1.com/wp-content/uploads/2024/04/Formula-1-2023-Impact-Report.pdf' },
            { text: 'THE RACE BEHIND THE RACE', url: 'https://inmotion.dhl/en/formula-1/race-behind-the-race' },
            { text: 'Formula 1 and DHL build on 20-year partnership in expanded multi-year renewal', url: 'https://www.formula1.com/en/latest/article/formula-1-and-dhl-build-on-20-year-partnership-in-expanded-multi-year.5eDcqE9SiryWYL0THT3Qsl' },
        ],
    },
    {
        title: 'Streckenbetrieb Page',
        links: [
            { text: 'F1 partners with Aggreko to deliver low-carbon power solutions at European races from 2025\n', url: 'https://www.formula1.com/en/latest/article/f1-partners-with-aggreko-to-deliver-low-carbon-power-solutions-at-european.5nkDo7HX1Cd76Tg7Fh4FUV' },
            { text: 'Formel 1 reist hin und her durch ganze Welt\n', url: 'https://www.zdf.de/nachrichten/sport/formel-1-nachhaltigkeit-100.html' },
            { text: 'Can Formula 1 Be Entertaining And Sustainable?\n', url: 'https://www.forbes.com/sites/vitascarosella/2024/08/21/can-formula-1-be-entertaining-and-sustainable/' },
            { text: 'Bahrein International Circuit - Environment\n', url: 'https://www.bahraingp.com/environment/' },
            { text: 'Australian Grand Prix - Environmental Sustainability\n', url: 'https://www.grandprix.com.au/about-us/driving-change/environmental-sustainability/' },
            ]
    },
    // Add more sections as needed
];

const Quellen = () => {
    return (
        <Box sx={{ padding: '20px', paddingLeft: '40px' }}>
            <Typography variant="h4" gutterBottom align="center">
                Quellen
            </Typography>
            <Typography variant="body1" gutterBottom align="center">
                Auf unserer Website wurden folgende Quellen verwendet.
            </Typography>
            {sources.map((section, index) => (
                <Box key={index} sx={{ marginBottom: '20px' }}>
                    <Typography variant="h5" gutterBottom>
                        {section.title}
                    </Typography>
                    {section.links.map((link, linkIndex) => (
                        <Typography key={linkIndex} variant="body1">
                            <Link href={link.url} target="_blank" rel="noopener">
                                {link.text}
                            </Link>
                        </Typography>
                    ))}
                </Box>
            ))}
        </Box>
    );
};

export default Quellen;