import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material'; // Import necessary components
import { FilterVintage } from '@mui/icons-material';

export default function ServicesSelector() {
    const [selectedServices, setSelectedServices] = React.useState({
        service1: false,
        service2: false,
        // Add more services as needed
    });

    const handleChange = (event) => {
        // Update the state to reflect checkbox changes
        setSelectedServices({ ...selectedServices, [event.target.name]: event.target.checked });
    };

    return (
        <Box sx={{
            m: 1,
            width: '100%',
            // borderBottom: '2px solid #F6F2F2;' // Comment out or remove this line
        }}
        >
            <FormControl variant="standard"
                sx={{
                    width: '100%',
                    '.MuiInput-underline:before, .MuiInput-underline:after': { display: 'none' }
                }}>
                <InputLabel
                    disableAnimation
                    id="demo-simple-select-standard-label"
                    sx={{
                        color: '#F2FEDC', // Ensure color applies at all times
                        '&.Mui-focused': {
                            color: '#F2FEDC', // Ensure color remains pink when focused
                        },
                        position: 'relative', // Adjusted to keep label fixed
                        transform: 'none', // Prevents animation
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <FilterVintage sx={{ color: '#E03D5A' }} />
                        <Typography className='inputLabel'>Select any additional services you'd like:</Typography>
                    </Stack>
                </InputLabel>
                {/* Here we add the checkboxes */}
                <FormControlLabel
                    control={<Checkbox checked={selectedServices.service1} onChange={handleChange} name="service1" />}
                    label="Checkbox 1"
                />
                <FormControlLabel
                    control={<Checkbox checked={selectedServices.service2} onChange={handleChange} name="service2" />}
                    label="Checkbox 2"
                />
                <FormControlLabel
                    control={<Checkbox checked={selectedServices.service3} onChange={handleChange} name="service3" />} // Corrected the name from service2 to service3 for Checkbox 3
                    label="Checkbox 3"
                />
                {/* Add more checkboxes as needed */}
            </FormControl>
        </Box>
    );
}
