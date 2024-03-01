import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField'; // Import TextField
import { Box, Stack, Typography } from '@mui/material';
import { FilterVintage, Padding } from '@mui/icons-material';

export default function PageSelector() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        // Only allow digits to be inputted
        const newValue = event.target.value.replace(/\D/g, '');
        setAge(newValue);
    };

    return (
        <Box
            className='boxOutline'
            sx={{
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
                        <Typography className='inputLabel'>Approximately many pages will your website have?</Typography>
                    </Stack>
                </InputLabel>
                <TextField
                    required
                    type="text" // Changed this to text to better control the input with regex
                    InputProps={{
                        inputProps: { min: 1, step: 1 }, // Only allow whole numbers greater than zero
                        disableUnderline: true, // Removes the underline
                        style: {
                            '&:hover': {
                                borderColor: 'transparent', // Removes border on hover
                            },
                            '&:focus': {
                                borderColor: 'transparent', // Removes border on focus
                            },
                            '&:after': {
                                borderColor: 'transparent', // Removes border after (when active/focused)
                            },
                            '&:before': {
                                borderColor: 'transparent', // Removes border before (initial state)
                            },
                        },
                    }}
                    id="number-of-pages"
                    value={age}
                    onChange={handleChange}
                    sx={{
                        '& .MuiInputBase-input': {
                            color: '#F6F2F2', // Input text color
                        },
                        '& .MuiInput-underline:before, .MuiInput-underline:after': {
                            borderBottom: 'none',
                        },
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'transparent', // Removes default border
                            },
                            '&:hover fieldset': {
                                borderColor: 'transparent', // Removes border on hover
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'transparent', // Removes border on focus
                            },
                        },

                    }}
                />

            </FormControl>
        </Box>
    );
}
