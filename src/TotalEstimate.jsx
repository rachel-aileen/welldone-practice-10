import * as React from 'react';
import { Box, Typography } from '@mui/material';

export default function TotalEstimate() {
    const whiteColor = '#F6F2F2';

    return (
        <Box
            sx={{
                m: 1,
                p: 2,
                width: '100%',
                backgroundColor: 'transparent',
                color: whiteColor,
                border: '2px solid #E03D5A',
                borderRadius: '0',
                display: 'flex',
                alignItems: 'center',
                height: '6%',
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    fontSize: 'clamp(1rem, 6vw, 1.3rem)',
                    fontFamily: 'Nunito Sans',
                    fontWeight: 500,
                }}
            >
                Total Estimate:
            </Typography>
        </Box>
    );
}
