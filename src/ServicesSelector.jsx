import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Box, Stack, Typography, Checkbox, FormControlLabel } from '@mui/material';
import { FilterVintage } from '@mui/icons-material';

export default function ServicesSelector() {
    const [selectedServices, setSelectedServices] = React.useState({
        service1: false,
        service2: false,
        service3: false, // Correct initialization
    });

    const handleChange = (event) => {
        setSelectedServices({ ...selectedServices, [event.target.name]: event.target.checked });
    };

    const pinkColor = '#E03D5A';
    const whiteColor = '#F6F2F2;';
    const yellowColor = '#F2FEDC;;';

    return (
        <Box sx={{
            m: 1,
            width: '100%',
        }}>
            <FormControl variant="standard"
                sx={{
                    width: '100%',
                    '.MuiInput-underline:before, .MuiInput-underline:after': { display: 'none' }
                }}>
                <InputLabel
                    disableAnimation
                    id="demo-simple-select-standard-label"
                    sx={{
                        color: yellowColor, // Keep original color for this text
                        '&.Mui-focused': {
                            color: yellowColor,
                        },
                        position: 'relative',
                        transform: 'none',
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <FilterVintage sx={{ color: pinkColor }} />
                        <Typography className='inputLabel'>Select any additional services you'd like:</Typography>
                    </Stack>
                </InputLabel>
                {/* Here we add the checkboxes with pink color */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selectedServices.service1}
                            onChange={handleChange}
                            name="service1"
                            sx={{ color: whiteColor, '&.Mui-checked': { color: whiteColor } }}
                        />
                    }
                    label="Checkbox 1"
                    sx={{ '& .MuiFormControlLabel-label': { color: whiteColor } }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selectedServices.service2}
                            onChange={handleChange}
                            name="service2"
                            sx={{ color: whiteColor, '&.Mui-checked': { color: whiteColor } }}
                        />
                    }
                    label="Checkbox 2"
                    sx={{ '& .MuiFormControlLabel-label': { color: whiteColor } }}
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={selectedServices.service3}
                            onChange={handleChange}
                            name="service3"
                            sx={{ color: whiteColor, '&.Mui-checked': { color: whiteColor } }}
                        />
                    }
                    label="Checkbox 3"
                    sx={{ '& .MuiFormControlLabel-label': { color: whiteColor } }}
                />
                {/* Add more checkboxes as needed */}
            </FormControl>
        </Box>
    );
}
