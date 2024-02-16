import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box } from '@mui/material';

export default function PageSelector() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Box sx=
            {{
                m: 1,
                width: '100%',
                borderBottom: '2px solid #F6F2F2;'
            }}
        >
            <FormControl variant="standard" sx=
                {{
                    width: '100%',
                    '.MuiInput-underline:before, .MuiInput-underline:after': { display: 'none' }
                }}>
                <InputLabel

                    id="demo-simple-select-standard-label"
                    sx={{ color: '#F2FEDC', fontSize: '7px !important', '&.Mui-focused': { color: '#F2FEDC', fontSize: '7px !important' } }}
                >
                    <span style={{ color: 'red', marginRight: 10 }}>*</span>How many pages will your website have?
                </InputLabel>
                <Select
                    required
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={age}
                    onChange={handleChange}
                    label="Age"
                    sx={{
                        color: '#F6F2F2', // Text and icon color
                        '& .MuiSvgIcon-root': { color: '#F6F2F2' }, // Dropdown icon color
                        // Hide the default underline
                        '& .MuiInput-underline:before, .MuiInput-underline:hover:not(.Mui-disabled):before': {
                            borderBottom: 'none'
                        },
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}
