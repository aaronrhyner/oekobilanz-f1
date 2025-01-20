import React, { useState } from 'react';
import { Button, Typography } from '@mui/material';

const TextPreview = ({ text }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const previewText = text.slice(0, 200); // Adjust the number of characters for the preview

    return (
        <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff' }}>
            <Typography variant="body1" style={{ whiteSpace: 'pre-line' }}>
                {expanded ? text : `${previewText}...`}
            </Typography>
            <Button onClick={handleToggle} color="primary" variant="contained" style={{ marginTop: '10px' }}>
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        </div>
    );
};

export default TextPreview;