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
import { IoMdEye } from "react-icons/io";
import { FcDownload } from "react-icons/fc";

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
        const response = await axios.get('http://localhost:4000/viewBillList');
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

  async function handleViewBill(id) {
    await axios
      .get(`http://localhost:4000/generatePdf/${id}`)
      .then(response => {
        console.log(response);
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
                <Card sx={{ minWidth: 375 }} variant="outlined" style={styles.CardContainer}>
                  <Grid container spacing={2}>
                    <Grid item xs={7} md={9}>
                      <CardContent>
                        <Typography variant="h6" component="div" color="primary.light" sx={{ fontFamily: 'Roboto', fontSize: '18px', fontWeight: 'bold' }} >
                          {item.invoiceNumber}
                        </Typography>
                        <Typography variant="h6" component="span" sx={{ fontFamily: 'Roboto', fontSize: '22px' }}>
                          Date :-
                        </Typography>
                        <Typography variant="h6" component="span" sx={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold' }}>
                          {item.billDate}
                        </Typography>
                        <Typography>
                          <Typography variant="h6" component="span" sx={{ fontFamily: 'Roboto', fontSize: '22px' }} >
                            Name :-
                          </Typography>
                          <Typography variant="h6" component="span" sx={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold' }} >
                            {item.billTo.clientName}
                          </Typography>
                        </Typography>
                        <Typography variant="h6" component="span" sx={{ fontFamily: 'Roboto', fontSize: '22px' }} >
                          Bill Amount :-
                        </Typography>
                        <Typography variant="h6" component="span" sx={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold' }} >
                          {item.totalPrice}
                        </Typography>

                      </CardContent>
                    </Grid >
                    <Grid item xs={5} md={3} mt={3}>
                      <CardActions>
                        <Button size="small" color="success" onClick={() => printPdf(item._id)} ><FcDownload size={23} /></Button>
                        <Button size="small" color="success" onClick={() => handleViewBill(item._id)}><IoMdEye size={25} /></Button>
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
