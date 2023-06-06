import * as React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import styles from "./style";
import { saveAs } from 'file-saver';
import { useSelector } from 'react-redux';
import axios from "axios";
import { useEffect, useState } from 'react';
import Error from '../../Container/ErrorPage/ErrorPage';
import { IoMdEye } from "react-icons/io";
import { FcDownload } from "react-icons/fc";
import { MdAddCircleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function ViewBill() {
  const navigate = useNavigate();

  //checking that user is logged In or not
  const loggedInUser = useSelector((state) => state.loggedInReducer);
  let userName = loggedInUser.signIn.name;

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

  // printing bill pdf from list
  async function printPdf(invoiceNumber) {
    await axios
      .get(`http://localhost:4000/generatePdf/${invoiceNumber}`, { responseType: 'blob' })
      .then(response => {
        saveAs(response.data, `${invoiceNumber}.pdf`);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);

      });
  }

  // view pdf from list 
  async function handleViewBill(invoiceNumber) {
    await axios
      .get(`http://localhost:4000/generatePdf/${invoiceNumber}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error(error);

      });
  }

  // create new bill
  function createBillHandler() {
    navigate("/bills/create")
  }

  return (
    <div>
      {userName ?
        (<Container style={styles.Container}>
          <ul>
            <div style={styles.Button} >
              <Button variant="outlined" color="success" onClick={createBillHandler} > Create New bill <MdAddCircleOutline size={20} color="success" /></Button>
            </div>
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
                      <Button size="small" color="success" onClick={() => printPdf(item.invoiceNumber)} ><FcDownload size={23} title="download" /></Button>
                      <Button size="small" color="success" onClick={() => handleViewBill(item._id)}><IoMdEye size={25} title="view" /></Button>
                    </CardActions>
                  </Grid>
                </Grid >
              </Card>
            ))}
          </ul>
        </Container>)
        : (<Error />)}

    </div>
  );
}
