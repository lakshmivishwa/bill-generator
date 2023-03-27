import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function CreateBill() {

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

  const navigateToReview = () => {
    //navigate to /login
    navigate('/bills/create/billReview');
  };
  return (

    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Typography mt={3} mb={2} variant="h6" component="h5">Bill To:-</Typography>
          <TextField fullWidth label="Who is this invoice to?" id="fullWidth" margin="dense" size="small" />
          <TextField fullWidth label="Email Address" id="fullWidth" margin="dense" size="small" />
          <TextField fullWidth label="Billing Affress" id="fullWidth" margin="dense" size="small" />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography mt={3} mb={2} variant="h6" component="h5">Bill From:-</Typography>
          <TextField fullWidth label="Who is this invoice from?" id="fullWidth" margin="dense" size="small" />
          <TextField fullWidth label="Email Address" id="fullWidth" margin="dense" size="small" />
          <TextField fullWidth label="Billing Affress" id="fullWidth" margin="dense" size="small" />
        </Grid>
      </Grid>

      {addItem.map((singleItem, index) => (
        <Grid container spacing={2} mt={3} mb={3}>
          <Grid item xs={6} md={8} key={index}>
            <Typography mt={3} mb={2} variant="h6" component="h5">Item</Typography>
            <TextField fullWidth label="Item Name" id="fullWidth" margin="dense" size="small" />
            <TextField fullWidth label="Item description" id="fullWidth" margin="dense" size="small" />
          </Grid>
          <Grid item xs={2} md={1}>
            <Typography mt={3} mb={2} variant="h6" component="h5">Qty</Typography>
            <TextField fullWidth label="" id="fullWidth" margin="dense" type="number" size="small" />
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
              <Typography mt={3} mb={2}>100 Rs</Typography>
              <Typography mt={3} mb={2}>20 Rs</Typography>
              <Typography mt={3} mb={2}>12 Rs</Typography>
              <Typography mt={3} mb={2} variant="h5" component="h5">100 Rs</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={12}>
          <Typography mt={3} mb={1} variant="h5" component="h5">Notes:-</Typography>
          < TextField fullWidth label="" id="fullWidth" margin="dense" size="small" />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button variant="contained" onClick={navigateToReview}>Preview</Button>
        </Grid>
      </Grid>
    </Container>
  );
}
