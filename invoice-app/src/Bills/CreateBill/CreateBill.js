import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
// import EditBill from './EditBill';
import FinalProductDetail from './ProductTable/FinalProductTable';

export default function NewCreateBill() {
  const date = new Date();

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

  const [inputFields, setInputFields] = useState([{
    itemName: "", itemDescription: "", qty: "", rate: "", delete: ""
  }]);

  const handleChange = (event) => {
    setInputFields(event.target.value);
  };

  const addInputField = () => {
    setInputFields(inputFields)
  }
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  }



  async function onSubmit(data) {
    console.log(inputFields);
    console.log(data);

    const jsonData =
    {
      "id": 1,
      "billTo": {
        "name": data.name,
        "billingAddress": data.billingAddress,
      },
      "billFrom": {
        "email": data.email,
        "invoiceFrom": data.invoiceFrom,
        "gst": "1AE275245863",
        "pan": "ATRPV1671J"
      },
      "notes": data.notes,
      "items": { inputFields },
      "dateOfInvoice": { date },
      "invoiceNumber": "",
      "accountDetails": {
      }

    }
    console.log(jsonData);
    const response = await fetch("/register", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(jsonData),
    });

    const getdata = await response.json()
    console.log(getdata);
    // return response;
    // // return res();
    if (getdata.status === 422 || !getdata) {
      window.alert("invalid")
      console.log("invalid")
    } else {
      console.log("success")
    }

  }

  return (
    <Container maxWidth="md">
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

            <TextField name="billingAddress" fullWidth label="Billing Address"
              {...register('billingAddress', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.billingAddress}
              helperText={errors.billingAddress?.message}

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

            <TextField name="CompanyAddress" fullWidth label="Address"
              {...register('CompanyAddress', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.CompanyAddress}
              helperText={errors.CompanyAddress?.message}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={5}>
          <FinalProductDetail />
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2} >
              <Grid item xs={6} md={6}>
                <Typography mt={3} mb={2}>Sub-Total:-</Typography>
                <Typography mt={3} mb={2}>Discountl:-</Typography>
                <Typography mt={3} mb={2}>Tax:-</Typography>
                <Typography mt={3} mb={2} variant="h5" component="h5">Total:-</Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Typography mt={3} mb={2}></Typography>
                <Typography mt={3} mb={2}></Typography>
                <Typography mt={3} mb={2}></Typography>
                <Typography mt={3} mb={2} variant="h5" component="h5"></Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={12}>
            <Typography mt={3} mb={1} variant="h5" component="h5">Notes:-</Typography>
            < TextField name="notes" fullWidth label=""
              {...register('notes', {
                required: "**Please write some notes**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.notes}
              helperText={errors.notes?.message} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" type="submit" >Preview</Button>
          </Grid>
        </Grid>
      </form>
    </Container >
  );
}
