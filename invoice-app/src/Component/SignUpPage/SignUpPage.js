import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { RadioGroup, FormLabel, FormControlLabel, Radio, FormControl, Link, Box, Typography, Container, MenuItem, InputLabel } from '@mui/material';
import styles from './style';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import { requiredField, namePattern, emailPattern } from '../../Error';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from "axios";
import { useState, useRef } from 'react';
// import Dropdown from '../../Container/State/State';

function SignUp() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(errors);
    const navigate = useNavigate()
    const password = useRef({});
    password.current = watch("password", "");


    async function onSubmit(data) {
        console.log(data);
        await axios.post(`http://localhost:4000/register`,
            data)
            .then((response) => {
                console.log(response.data);
                navigate("/login")
            })
    }

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
        <Container component="main" maxWidth="xs">
            <div style={styles.MainContainer}>
                <FormControl onSubmit={handleSubmit(onSubmit)}>
                    <Container component="main" maxWidth="xs" style={styles.Container}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>

                            <Typography component="h1" variant="h5" color="primary">
                                Sign Up
                            </Typography>

                            <Box component="form" noValidate sx={{ mt: 1 }}>

                                <TextField
                                    // name validation
                                    {...register('name', {
                                        required: requiredField,
                                        pattern: {
                                            //used reg exp. for email pattern
                                            value: namePattern, message: "**Please enter full name **"
                                        }
                                    })}
                                    error={errors.name}
                                    helperText={errors.name?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                />
                                {/* radio button for Gender */}
                                <div>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        defaultValue="female"
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                    >
                                        <FormControlLabel id="1" value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel id="2" value="male" control={<Radio />} label="Male" />
                                        <FormControlLabel id="3" value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </div>
                                {/* radio button end */}

                                <TextField name="contact"
                                    //contact detail validation
                                    {...register('contact', {
                                        required: requiredField,
                                        minLength:
                                            { value: 10, message: "**Contact number should be 10 digit**" },
                                        maxLength: {
                                            value: 10,
                                            message: "**Contact number should be 10 digit**"
                                        }
                                    })}
                                    error={errors.contact}
                                    helperText={errors.contact?.message}
                                    margin="normal"
                                    type="number"
                                    required
                                    fullWidth
                                    id="contact"
                                    label="Contact Number"
                                    autoComplete="contact"
                                    autoFocus
                                />

                                <TextField

                                    {...register('email', {
                                        required: requiredField,
                                        pattern: {
                                            //used reg exp. for email pattern
                                            value: emailPattern, message: "**This is not a valid email**"
                                        }
                                    })}

                                    error={errors.email}
                                    helperText={errors.email?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    autoComplete="email"
                                    autoFocus
                                />

                                <TextField

                                    {...register('address', {
                                        required: requiredField,

                                    })}

                                    error={errors.address}
                                    helperText={errors.address?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="address"
                                    label="Address"
                                    autoComplete="address"
                                    autoFocus
                                />

                                <TextField

                                    {...register('city', {
                                        required: requiredField,

                                    })}
                                    error={errors.city}
                                    helperText={errors.city?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="city"
                                    label="City"
                                    autoComplete="City"
                                    autoFocus
                                />

                                <TextField

                                    {...register('pincode', {
                                        required: requiredField,
                                        minLength:
                                            { value: 5, message: "**minimum value should be 5 digit**" },
                                        maxLength: {
                                            value: 7,
                                            message: "**Maximum value should be 7 digit**"
                                        }

                                    })}

                                    error={errors.pincode}
                                    helperText={errors.pincode?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="pincode"
                                    label="Pincode"
                                    autoComplete="pincode"
                                    autoFocus
                                />

                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label">State*</InputLabel>
                                    <Select name="state"
                                        {...register('state', {
                                            required: "**Please Select State**",

                                        })}

                                        required
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select-label"
                                        value={state}
                                        label="State"
                                        autoComplete="State"
                                        onChange={handleChange}


                                    >
                                        {stateNames.map((stateName) => (
                                            <MenuItem
                                                key={stateName}
                                                value={stateName}
                                            // style={getStyles(states, personName, theme)}
                                            >
                                                {stateName}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {errors.state && <span style={styles.stateError}> {errors.state?.message}</span>}

                                <TextField
                                    {...register('password', {
                                        required: requiredField,
                                        minLength:
                                            { value: 4, message: "**Password must be more then 4 characters**" },
                                        maxLength: {
                                            value: 10,
                                            message: "**Password cannot be exceed 10 characters**"
                                        }
                                    })}
                                    error={errors.password}
                                    helperText={errors.password?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />

                                <TextField
                                    {...register('confirmPassword', {
                                        required: requiredField,
                                        validate: value =>
                                            value === password.current || "Please enter same as password"
                                    }
                                    )}
                                    error={errors.confirmPassword}
                                    helperText={errors.confirmPassword?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="confirm-password"
                                />
                                {/* Submit Button */}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >Sign Up</Button>

                                {/* button end */}

                                <Link href="/login" variant="body2">
                                    {"Already have an account? Login"}
                                </Link>
                            </Box>
                        </Box>

                        {/* Footer for signup page */}

                        <Typography variant="body2" align="center" sx={{ mt: 8, mb: 4 }}>
                            {'Copyright © '}
                            <Link color="inherit" href="#">
                                Your Website
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>

                        {/* Footer end */}
                    </Container>
                </FormControl>
            </div>
        </Container>
    );
}
export default SignUp;