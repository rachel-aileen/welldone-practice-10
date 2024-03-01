import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function TotalEstimate() {
    return (
        <Box
            sx={{
                m: 1,
                p: 2, // Add some padding inside the box
                width: '100%', // The box takes the full width
                backgroundColor: '#1976D2', // A blue background color
                color: 'white', // White text color
                border: '2px solid #1976D2', // Blue border
                borderRadius: '0', // Sharp corners
                display: 'flex', // Use Flexbox for alignment
                alignItems: 'center', // Align items vertically
                height: '56px', // Match the height of MUI text field
            }}
        >
            <Typography variant="body1">Total Estimate</Typography>
        </Box>
    );
}
