import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import styles from "./style";

import { ThemeProvider } from '@mui/material';
import theme from "../../../Theme/Theme"
export default function ViewBill() {
  return (
    <div style={styles.MainContainer}>

      <Container maxWidth="md"style={styles.MainCardContainer} >
        <Card sx={{ minWidth: 275 }} variant="outlined" style={styles.CardContainer}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" component="div" color="info.main">
                    Invoice No:1111
                  </Typography>
                  <Typography variant="h6" component="div" color="info.main">
                    Date:
                  </Typography>
                  <Typography variant="h6" component="div" color="info.main" >
                    Name:
                  </Typography>
                </ThemeProvider>
              </CardContent>
            </Grid >

            <Grid item xs={5} md={4} mt={2}>
              <CardActions>
                <Button variant="outlined" size="small" color="success"  >View</Button>
                <Button variant="outlined" size="small" color="success" >Edit</Button>
              </CardActions>
            </Grid>
          </Grid >
        </Card>
        <Card sx={{ minWidth: 275 }} variant="outlined">
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h6" component="div" color="info.main">
                    Invoice No:1111
                  </Typography>
                  <Typography variant="h6" component="div" color="info.main">
                    Date:
                  </Typography>
                  <Typography variant="h6" component="div" color="info.main" >
                    Name:
                  </Typography>
                </ThemeProvider>
              </CardContent>
            </Grid >

            <Grid item xs={5} md={4} mt={2}>
              <CardActions>
                <Button variant="outlined" size="small" color="success"  >View</Button>
                <Button variant="outlined" size="small" color="success" >Edit</Button>
              </CardActions>
            </Grid>
          </Grid >
        </Card>
      </Container >
    </div>
  );
}
