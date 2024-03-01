import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function TotalEstimate() {



    const whiteColor = '#F6F2F2';

    return (
        <Box
            sx={{
                m: 1,
                p: 2, // Add some padding inside the box
                width: '100%', // The box takes the full width
                backgroundColor: 'transparent', // Make the inside of the box transparent
                color: whiteColor, // Set the text color to blue to match the outline
                border: '2px solid #E03D5A', // Blue border for the outline
                borderRadius: '0', // Sharp corners
                display: 'flex', // Use Flexbox for alignment
                alignItems: 'center', // Align items vertically
                height: '56px', // Match the height of MUI text field
            }}
        >
            <Typography variant="body1">Total Estimate:</Typography>
        </Box>
    );
}
