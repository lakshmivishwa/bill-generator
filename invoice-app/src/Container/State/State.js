

import React, { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const Dropdown = () => {

    const stateNames = [
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
    ];

    const [state, setState] = useState("");
    const handleChange = (event) => {
        setState(event.target.value);
    };


    return (
        <FormControl fullWidth mt={3}>
            <InputLabel id="demo-simple-select-required-label">State</InputLabel>
            <Select

                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={state}
                label="Age"
                onChange={handleChange}
            >
                {stateNames.map((stateName) => (
                    <MenuItem
                        key={stateName}
                        value={stateName}
                  
                    >
                        {stateName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>

    );
};

export default Dropdown;