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
            <Button onClick={handleToggle} variant="contained" style={{ marginTop: '10px', backgroundColor: '#8D1304' }}>                {expanded ? 'Show Less' : 'Weiterlesen'}
            </Button>
        </div>
    );
};

export default TextPreview;