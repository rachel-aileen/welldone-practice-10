import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'; // Import TextField
import { Box, Stack, Typography } from '@mui/material';
import { FilterVintage } from '@mui/icons-material';

export default function PageSelector() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{
            m: 1,
            width: '100%',
            borderBottom: '2px solid #F6F2F2;'
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
                        <Typography className='inputLabel'>How many pages will your website have?</Typography>
                    </Stack>
                </InputLabel>
                <TextField
                    required
                    type="number"
                    InputProps={{ inputProps: { min: 1, step: 1 } }} // Only allow whole numbers greater than zero
                    id="number-of-pages"
                    value={age}
                    onChange={handleChange}
                    sx={{
                        '& .MuiInputBase-input': { color: '#F6F2F2' }, // Input text color
                        '& .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before': {
                            borderBottom: 'none'
                        },
                    }}
                />
            </FormControl>
        </Box>
    );
}
