import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"

export default function CreateBill() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const [addItem, setAddItem] = useState([
    { addItemList: "" },
  ]);

  const handleAddItem = () => {
    setAddItem([...addItem, { addItemList: "" }])
  }
  const handleRemoveItem = (index) => {
    const list = [...addItem]
    list.splice(index, 1)
    setAddItem(list)
  }

  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/bills/create/billReview');
  };

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

            <TextField fullWidth label="Email Address"
              {...register('email', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.email}
              helperText={errors.email?.message} />

            <TextField fullWidth label="Billing Address"
              {...register('billingAddress', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.billingAddress}
              helperText={errors.billingAddress?.message} />
          </Grid>
          <Grid item xs={6} md={6}>
            <Typography mt={3} mb={2} variant="h6" component="h5">Bill From:-</Typography>


            <TextField fullWidth label="Who is this invoice from?"
              {...register('invoiceFrom', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.invoiceFrom}
              helperText={errors.invoiceFrom?.message} />

            <TextField fullWidth label="Email Address"
              {...register('companyEmail', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.companyEmail}
              helperText={errors.companyEmail?.message} />
            <TextField fullWidth label="Address"
              {...register('CompanyAddress', {
                required: "**This Field is required**",
              })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.CompanyAddress}
              helperText={errors.CompanyAddress?.message} />
          </Grid>
        </Grid>

        {addItem.map((singleItem, index) => (
          <Grid container spacing={2} mt={3} mb={3}>
            <Grid item xs={4} md={6} key={index}>
              <Typography mt={3} mb={2} variant="h6" component="h5">Item</Typography>
              <TextField fullWidth label="Item Name"
                {...register('itemName', {
                  required: "**Please fill in this field**",
                })}
                margin="dense"
                size="small"
                id="fullWidth"
                error={errors.itemName}
                helperText={errors.itemName?.message} />

              <TextField fullWidth label="Item description"
                {...register('itemDescription', {
                  required: "**Please fill in this field**",
                })}
                margin="dense"
                size="small"
                id="fullWidth"
                error={errors.itemDescription}
                helperText={errors.itemDescription?.message} />

            </Grid>
            <Grid item xs={2} md={1}>
              <Typography mt={3} mb={2} variant="h6" component="h5">Qty</Typography>
              <TextField fullWidth label="" type="number"
                {...register('qty', {
                  required: "**Please select Qty**",
                })}
                margin="dense"
                size="small"
                id="fullWidth"
                error={errors.qty}
                helperText={errors.qty?.message} />

            </Grid>
            <Grid item xs={2} md={2}>
              <Typography mt={3} mb={2} variant="h6" component="h5">Rate</Typography>
              < TextField fullWidth label=""
                {...register('rate', {
                  required: "**Please Enter rate value**",
                })}
                margin="dense"
                size="small"
                id="fullWidth"
                error={errors.rate}
                helperText={errors.rate?.message} />
            </Grid>

            <Grid item xs={2} md={2}>
              <Typography mt={3} mb={2} variant="h6" component="h5">Price</Typography>
              < TextField fullWidth label="" id="fullWidth" margin="dense" size="small" />
            </Grid>


            <Grid item xs={2} md={1}>
              <Typography mt={3} mb={2} variant="h6" component="h6">Action</Typography>
              {addItem.length > 1 && (
                <Button onClick={handleRemoveItem} >
                  < MdDeleteForever size={30} color="red" /></Button>
              )}
            </Grid>
            <Grid item xs={12} md={12}>
              {addItem.length - 1 === index && addItem.length < 4 && (
                <Button variant="contained" onClick={handleAddItem}>Add Item</Button>
              )}
            </Grid>
          </Grid>
        ))}

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
            < TextField fullWidth label="" {...register('notes', {
              required: "**Please write some notes**",
            })}
              margin="dense"
              size="small"
              id="fullWidth"
              error={errors.rate}
              helperText={errors.rate?.message} />
          </Grid>
          <Grid item xs={12} md={12}>
            <Button variant="contained" type="submit" >Preview</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
