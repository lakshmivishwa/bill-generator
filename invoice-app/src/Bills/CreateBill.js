import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';
import { MdDeleteForever } from "react-icons/md";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
// import { red } from '@mui/material/colors';

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

  return (

    <Container>

      <Grid container spacing={2}>

        <Grid item xs={6} md={6}>
          <Typography mt={3} mb={2}>Bill To:-</Typography>
          <TextField fullWidth label="Who is this invoice to?" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Email Address" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Billing Affress" id="fullWidth" margin="dense" />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography mt={3} mb={2}>Bill From:-</Typography>
          <TextField fullWidth label="Who is this invoice from?" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Email Address" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Billing Affress" id="fullWidth" margin="dense" />
        </Grid>
      </Grid>

      {addItem.map((singleItem, index) => (
        <Grid container spacing={2} mt={3} mb={3}>
          <Grid item xs={6} md={8} key={index}>
            <Typography mt={3} mb={2}>ITEM</Typography>
            <TextField fullWidth label="Item Name" id="fullWidth" margin="dense" />
            <TextField fullWidth label="Item description" id="fullWidth" margin="dense" />
          </Grid>
          <Grid item xs={2} md={1}>
            <Typography mt={3} mb={2}>QTY</Typography>
            <TextField fullWidth label="" id="fullWidth" margin="dense" type="number" />
          </Grid>
          <Grid item xs={2} md={2}>
            <Typography mt={3} mb={2}>PRICE</Typography>
            < TextField fullWidth label="" id="fullWidth" margin="dense" />
          </Grid>
          <Grid item xs={2} md={1}>
            <Typography mt={3} mb={2}>ACTION</Typography>
            {addItem.length > 1 && (
              <Button onClick={handleRemoveItem} > < MdDeleteForever size={30} color="red" /></Button>
            )}
          </Grid>
          {addItem.length - 1 === index && addItem.length < 4 && (
            <Button variant="contained" onClick={handleAddItem}>Add Item</Button>
          )}

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

    </Container>
  );
}
