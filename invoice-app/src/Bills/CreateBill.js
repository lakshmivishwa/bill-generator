import * as React from 'react';
import { Grid, Typography, Container, Button } from '@mui/material';

import TextField from '@mui/material/TextField';

export default function CreateBill() {
  return (

    <Container>

      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <Typography>Bill To:-</Typography>
          <TextField fullWidth label="Who is this invoice to?" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Email Address" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Billing Affress" id="fullWidth" margin="dense" />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography>Bill From:-</Typography>
          <TextField fullWidth label="Who is this invoice from?" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Email Address" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Billing Affress" id="fullWidth" margin="dense" />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography>ITEM</Typography>
          <TextField fullWidth label="Item Name" id="fullWidth" margin="dense" />
          <TextField fullWidth label="Item description" id="fullWidth" margin="dense" />
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography>QTY</Typography>
          <TextField fullWidth label="" id="fullWidth" margin="dense" />
        </Grid>
        <Grid item xs={12} md={2}>
          <Typography>PRICE/RATE</Typography>
          < TextField fullWidth label="" id="fullWidth" margin="dense" />
        </Grid>
        <Grid item xs={12} md={1}>
          <Typography>ACTION</Typography>
          <p>delete</p>
        </Grid>
      </Grid>

      <Button variant="contained">Add Item</Button>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography>Sub-Total:-</Typography>
              <Typography>Discountl:-</Typography>
              <Typography>Tax:-</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography>100 Rs</Typography>
              <Typography>20 Rs</Typography>
              <Typography>12 Rs</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

    </Container>
  );
}
