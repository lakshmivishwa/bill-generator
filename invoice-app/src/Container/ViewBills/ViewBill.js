import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import styles from "./style";
import { saveAs } from 'file-saver';
import { ThemeProvider } from '@mui/material';
import Theme from '../../Theme/Theme';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useEffect, useState } from 'react';
import SignIn from '../../Component/SignInPage/signInForm';
export default function ViewBill() {

  const loggedInUser = useSelector((state) => state.loggedInReducer);
  console.log(loggedInUser);
  let userName = loggedInUser.signIn.name;
  console.log(userName);

  const billDetails = useSelector((state) => state.billDetailReducer);
  console.log(billDetails);

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/viewBills');
        setData(response.data);

      } catch (error) {
        console.error(error);
        console.error("something went wrong");
      }
    };

    getData();
  }, []);
  console.log(data);
  async function printPdf(id) {

    await axios
      .get(`http://localhost:4000/generatePdf/${id}`, { responseType: 'blob' })
      .then(response => {
        saveAs(response.data, 'generated_pdf.pdf');
      })
      .catch(error => {
        // Handle any errors
        console.error(error);

      });
  }
  console.log(data);

  return (
    <div>
      {userName ?
        (<Container style={styles.Container}>
          <div>
            <ul>
              {data.map(item => (

                <Card sx={{ minWidth: 275 }} variant="outlined" style={styles.CardContainer}>
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                      <CardContent>
                        <ThemeProvider theme={Theme}>
                          <Typography variant="h6" component="div" color="info.main">
                            Invoice No:{item.invoiceNumber}
                          </Typography>
                          <Typography variant="h6" component="div" color="info.main">
                            Date:{item.billDate}
                          </Typography>
                          <Typography variant="h6" component="div" color="info.main" >
                            Name: {item.billTo.clientName}
                          </Typography>
                        </ThemeProvider>
                      </CardContent>
                    </Grid >
                    <Grid item xs={5} md={4} mt={2}>
                      <CardActions>
                        <Button variant="outlined" size="small" color="success" onClick={() => printPdf(item._id)} >Download</Button>
                        {/* <Button variant="outlined" size="small" color="success" >Edit</Button> */}
                      </CardActions>
                    </Grid>
                  </Grid >
                </Card>
              ))}
            </ul>
          </div>
        </Container>)
        : (<SignIn />)}

    </div>
  );
}
