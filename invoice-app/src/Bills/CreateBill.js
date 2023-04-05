import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"

export default function CreateBill() {
  const date = new Date();

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

  const [inputFields, setInputFields] = useState([{
    itemName: "", itemDescription: "", qty: "", rate: ""
  }]);

  const addInputField = () => {
    setInputFields([...inputFields, {
    }])
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

        {inputFields.map((data, index) => {
          return (

            <Grid container spacing={2} mt={3} mb={3}>
              <Grid item xs={4} md={6}  >
                <Typography mt={3} mb={2} variant="h6" component="h5">Item</Typography>
                <TextField name={`itemName${index + 1}`} fullWidth label="Item Name"
                  {...register(`itemName${index + 1}`, {
                    required: "**Please fill in this field**",
                  })}
                  margin="dense"
                  size="small"
                  error={errors.itemName}
                  helperText={errors.itemName?.message}

                />
                <TextField name={`itemDescription${index + 1}`} fullWidth label="Item description"
                  {...register(`itemDescription${index + 1}`, {
                    required: "**Please fill in this field**",
                  })}
                  margin="dense"
                  size="small"
                  error={errors.itemDescription}
                  helperText={errors.itemDescription?.message}
                />

              </Grid>
              <Grid item xs={2} md={1}>
                <Typography mt={3} mb={2} variant="h6" component="h5">Qty</Typography>
                <TextField name={`qty${index + 1}`} fullWidth label="" type="number"
                  {...register(`qty${index + 1}`, {
                    required: "**Please select Qty**",
                  })}
                  margin="dense"
                  size="small"
                  error={errors.qty}
                  helperText={errors.qty?.message}
                />

              </Grid>
              <Grid item xs={2} md={2}>
                <Typography mt={3} mb={2} variant="h6" component="h5">Rate</Typography>
                <TextField name={`rate${index + 1}`} fullWidth label=""
                  {...register(`rate${index + 1}`, {
                    required: "**Please fill in this field**",
                  })}
                  margin="dense"
                  size="small"
                  error={errors.rate}
                  helperText={errors.rate?.message}
                />
              </Grid>

              <Grid item xs={2} md={2}>
                <Typography mt={3} mb={2} variant="h6" component="h5">Price</Typography>
                <Typography mt={3} mb={2} variant="h6" component="h5">0</Typography>
              </Grid>
              <Grid item xs={2} md={1}>
                <Typography mt={3} mb={2} variant="h6" component="h6">Action</Typography>
                {inputFields.length > 1 && (
                  <Button onClick={removeInputFields} >
                    < MdDeleteForever size={30} color="red" /></Button>
                )}
              </Grid>

              <Grid item xs={12} md={12}>
                {inputFields.length - 1 === index && inputFields.length < 4 && (
                  <Button variant="contained" onClick={addInputField}>Add Item</Button>
                )}
              </Grid>
            </Grid>
          )
        })}

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
    </Container>
  );
}
