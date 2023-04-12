import * as React from 'react';
import { Grid, Typography, Container, Button, Card, CardContent } from '@mui/material';
import styles from "./style";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
// import EditBill from './EditBill';
import FinalProductDetail from './FinalProductTable/FinalProductTable';

export default function NewCreateBill() {
  // const date = new Date();

  const { register, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    console.log(data);

    // const jsonData =
    // {
    //   "id": 1,
    //   "billTo": {
    //     "name": data.name,
    //     "billingAddress": data.billingAddress,
    //   },
    //   "billFrom": {
    //     "email": data.email,
    //     "invoiceFrom": data.invoiceFrom,
    //     "gst": "1AE275245863",
    //     "pan": "ATRPV1671J"
    //   },
    //   "notes": data.notes,
    //   "items": { inputFields },
    //   "dateOfInvoice": { date },
    //   "invoiceNumber": "",
    //   "accountDetails": {
    //   }

    // }
    // console.log(jsonData);

    // const response = await fetch("/register", {
    //   method: "POST",
    //   credentials: "same-origin",
    //   headers: { "Content-Type": "application/json" },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify(jsonData),
    // });

    // const getdata = await response.json()
    // console.log(getdata);
    // return response;
    // // return res();
    // if (getdata.status === 422 || !getdata) {
    //   window.alert("invalid")
    //   console.log("invalid")
    // } else {
    //   console.log("success")
    // }
  }

  return (

    <Container maxWidth="md" >
      <Card sx={{ minWidth: 275 }} mt={3} mb={3}>
        <CardContent>
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
                    <Typography variant="h5" component="h5">1</Typography>
                    <Typography variant="h5" component="h5">1</Typography>
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
                <Button variant="contained" type="submit" >Preview</Button>
              </Grid>
            </Grid>
          </form >

        </CardContent>
      </Card>
    </Container>
  );
}
