import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { RadioGroup, FormLabel, FormControlLabel, Radio, FormControl } from '@mui/material';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styles from './style';
import { useForm } from "react-hook-form"
import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

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
                // navigate("/login")
            })
    }

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
                                        required: "**Name is required**",
                                        pattern: {
                                            //used reg exp. for email pattern
                                            value: /([A-Za-z]){4,}([\s]){1}([A-Za-z]){4,}/, message: "**Please enter full name **"
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
                                        required: "**Mobile number is required**",
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
                                    //Email validation
                                    {...register('email', {
                                        required: "**Email is required**",
                                        pattern: {
                                            //used reg exp. for email pattern
                                            value: /^(?!.*?\.\.)[a-z]+[a-z0-9._]+[@]{1}[a-z]+[\d]*[a-z.]+$/g, message: "**This is not a valid email**"
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
                                    //Email validation
                                    {...register('address', {
                                        required: "**Address is required**",

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
                                    //Email validation
                                    {...register('cityPincode', {
                                        required: "**City and Pincode is required**",

                                    })}

                                    error={errors.cityPincode}
                                    helperText={errors.cityPincode?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="cityPincode"
                                    label="City and Pincode"
                                    autoComplete="cityPincode"
                                    autoFocus
                                />

                                <TextField
                                    //Email validation
                                    {...register('state', {
                                        required: "**State is required**",

                                    })}

                                    error={errors.state}
                                    helperText={errors.state?.message}
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="state"
                                    label="State"
                                    autoComplete="state"
                                    autoFocus
                                />

                                <TextField
                                    {...register('password', {
                                        required: "**Password is required**",
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
                                        required: "**confirm Password is required**",
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