import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "./style";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/material';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux'

function BillPreview(props) {

    const items = useSelector((state) => state.itemListReducer)

    console.log(items);

    console.log(props);

    let value = props.value.data;
    console.log(value);

    const ref = React.createRef();

    return (

        <Container maxWidth="md" ref={ref}>
            <Card variant="outlined" style={styles.container}>
                <Grid container spacing={1} style={styles.Gridcontainer}>
                    <Grid item sm={7} xs={12}>
                        <Typography component="h6" variant='h6'>{value.name}</Typography>
                        <Typography component="p" variant='p'>{value.billingAddress}</Typography>
                        <Typography component="p" variant='p'>{value.contact}</Typography>
                    </Grid>
                    <Grid item sm={4} xs={12}>
                        <Typography component="h6" variant='h6'> Invoice</Typography>
                        <Typography component="p" variant='p'> Date:-</Typography>
                        <Typography component="p" variant='p'></Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={1} style={styles.container}>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>BILL TO:-</Typography>
                        <Typography component="p" variant='p'>{value.invoiceFrom}</Typography>
                        <Typography component="p" variant='p'>{value.CompanyContact}</Typography>
                        <Typography component="p" variant='p'>{value.companyEmail}</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>SHIP TO:-</Typography>
                        <Typography component="p" variant='p'> {value.invoiceFrom}</Typography>
                        <Typography component="p" variant='p'>{value.companyAddress}</Typography>
                        <Typography component="p" variant='p'>{value.companyCityPin}</Typography>
                        <Typography component="p" variant='p'>{value.state}</Typography>
                        <Typography component="p" variant='p'>Country :- India</Typography>
                    </Grid>
                </Grid>
            </Card>
            <Card variant="outlined" style={styles.container}>
                <CardContent >


                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={12} md={12}  >
                            <table className="table">
                                {/* {(tableData.length !== 0) ? */}
                                <thead style={styles.TableHead}>
                                    <tr >
                                        <th>Sr No</th>
                                        <th>Item Name</th>
                                        <th>Qty</th>
                                        <th>Rate</th>
                                        <th>Price</th>

                                    </tr>
                                </thead>
                                {/* : ''} */}
                                <tbody>
                                    {/* {tableData.map((data, index) => { */}

                                    {/* return ( */}
                                    <tr >

                                        <td>1</td>
                                        <td>hh</td>
                                        <td>aaa</td>
                                        <td >11</td>
                                        <td>123</td>

                                    </tr>
                                    {/* ); */}
                                    {/* })} */}
                                </tbody>
                            </table>
                        </Grid>
                    </Grid>


                </CardContent>
            </Card>

            <Card variant="outlined" style={styles.container}>
                <CardContent >
                    <Typography component="p" variant='p'>{value.notes}</Typography>
                </CardContent>

            </Card>
            <Button variant="contained" onClick={props.handlePrint}>Download Bill</Button>
            <Button variant="contained" style={styles.Button} onClick={props.handleClick}>Cancel</Button>
        </Container>


    )
}

export default BillPreview;