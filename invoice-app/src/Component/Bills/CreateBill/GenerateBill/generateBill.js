import * as React from 'react';
import { Grid, Typography, Container, Button, Card, CardContent, Link } from '@mui/material';
import styles from "./style";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
import FinalProductDetail from '../BillComponents/FinalProductTable/FinalProductTable';
import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
import BillPreview from '../../BillPreview/BillPreview';

export default function NewCreateBill() {
    const loggedUserAddress = useSelector((state) => state.loggedInReducer)
    let userAddressDetail = loggedUserAddress.signIn.response;
    console.log(userAddressDetail);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [address, setAddress] = useState({
        userAddress: userAddressDetail.address,
        cityPincode: userAddressDetail.cityPincode,
        contact: userAddressDetail.contact,
        state: userAddressDetail.state,
        name: userAddressDetail.name,
        email: userAddressDetail.email,
    })

    const [detail, setDetail] = useState({})
    console.log(address);

    async function onSubmit(data) {
        console.log(data);
        setBillPreview("false")
        setDetail({ data });
    }

    const [billPreview, setBillPreview] = useState("true");
    const cancelPreview = () => {
        setBillPreview("true")
    }

    const printHandlier = () => {
        window.print();
    }

    return (

        <Container maxWidth="md" >
            <Card sx={{ minWidth: 275 }} mt={3} mb={3}>
                <CardContent>
                    {billPreview === "true" ?
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <Typography mt={3} mb={2} variant="h6" component="h5">Bill To:-</Typography>

                                    <TextField fullWidth label="Who is this invoice to?"
                                        {...register('name', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.name}
                                        helperText={errors.name?.message}
                                    />

                                    <TextField name="email" fullWidth label="Email Address"
                                        {...register('email', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.email}
                                        helperText={errors.email?.message}
                                    />

                                    <TextField name="contact" fullWidth label="Contact no"
                                        {...register('contact', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.contact}
                                        helperText={errors.contact?.message}
                                    />

                                    <TextField fullWidth label="Address"
                                        {...register('billingAddress', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.billingAddress}
                                        helperText={errors.billingAddress?.message}
                                    />

                                    <TextField name="cityPin" fullWidth label="City and Pin-code"
                                        {...register('cityPin', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.cityPin}
                                        helperText={errors.cityPin?.message}
                                    />

                                    <TextField name="state" fullWidth label="State"
                                        {...register('state', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.state}
                                        helperText={errors.state?.message}
                                    />
                                </Grid>

                                <Grid item xs={6} md={6}>
                                    <Typography mt={3} mb={2} variant="h6" component="h5">Bill From:-</Typography>

                                    <TextField name="invoiceFrom" fullWidth label="Who is this invoice from?"
                                        {...register('invoiceFrom', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.invoiceFrom}
                                        helperText={errors.invoiceFrom?.message}
                                        onChange={data => setAddress({
                                            userAddress: data.userAddress
                                        })}
                                        value={address.name}
                                    />

                                    <TextField name="companyEmail" fullWidth label="Email Address"
                                        {...register('companyEmail', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.companyEmail}
                                        helperText={errors.companyEmail?.message}
                                        onChange={data => setAddress({
                                            email: data.email
                                        })}
                                        value={address.email}
                                    />

                                    <TextField name="CompanyContact" fullWidth label="CompanyContact"
                                        {...register('CompanyContact', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.CompanyContact}
                                        helperText={errors.CompanyContact?.message}
                                        onChange={data => setAddress({
                                            contact: data.contact
                                        })}
                                        value={address.contact}
                                    />

                                    <TextField name="companyAddress" fullWidth label="Company Address"
                                        {...register('companyAddress', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.companyAddress}
                                        helperText={errors.companyAddress?.message}
                                        onChange={data => setAddress({
                                            userAddress: data.userAddress
                                        })}
                                        value={address.userAddress}
                                    />

                                    <TextField name="companyCityPin" fullWidth label="City and Pin-code"
                                        {...register('companyCityPin', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.companyCityPin}
                                        helperText={errors.companyCityPin?.message}
                                        onChange={data => setAddress({
                                            cityPincode: data.cityPincode
                                        })}
                                        value={address.cityPincode}
                                    />

                                    <TextField name="companyState" fullWidth label="State"
                                        {...register('companyState', {
                                            required: "**This Field is required**",
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.companyState}
                                        helperText={errors.companyState?.message}
                                        onChange={data => setAddress({
                                            state: data.state
                                        })}
                                        value={address.state}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} mt={5}>
                                <FinalProductDetail />
                            </Grid>

                            <Grid container spacing={2} mt={5}>
                                <Grid item xs={12} md={6}>
                                    <Card style={styles.CardComponent} >
                                        <Typography mt={3} mb={1} variant="h5" component="h5" >Notes:-</Typography>
                                        < TextField name="notes" label=""
                                            {...register('notes', {
                                                required: "**Please write some notes**",
                                            })}
                                            multiline
                                            rows={4}
                                            margin="dense"
                                            size="small"
                                            error={errors.notes}
                                            helperText={errors.notes?.message}
                                        />
                                    </Card>

                                </Grid>

                                <Grid item xs={12} md={1}>
                                </Grid>

                                <Grid item xs={12} md={5}>

                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={6} md={7}>
                                            <Typography mt={3} variant="h5" component="h5">Sub-Total:- </Typography>
                                            <Typography variant="h5" component="h5">Discountl:-</Typography>
                                            <Typography variant="h5" component="h5">Tax:-</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={5} style={styles.Total}>
                                            <Typography mt={3} variant="h5" component="h6">1</Typography>
                                            <Typography variant="h5" component="h5">-</Typography>
                                            <Typography variant="h5" component="h5">-</Typography>
                                        </Grid>
                                    </Grid>

                                    <hr />

                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={6} md={7}>
                                            <Typography variant="h5" component="h5">Total:-</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={5} style={styles.Total}>
                                            <Typography variant="h5" component="h5">1</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid container spacing={2} mb={2} mt={5}>
                                <Grid item xs={12} md={12}>
                                    <Button variant="contained" type="submit"  >Preview</Button>
                                </Grid>
                            </Grid>
                        </form > :
                        <BillPreview handleClick={cancelPreview} handlePrint={printHandlier} value={detail} />
                    }

                </CardContent>
            </Card>
        </Container>
    );
}
