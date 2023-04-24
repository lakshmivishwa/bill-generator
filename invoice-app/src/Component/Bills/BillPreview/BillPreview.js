import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "./style";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'
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
                        <Typography component="p" variant='p'>{value.companyAddress}{value.companyCityPin}{value.companyState}</Typography>
                        <Typography component="p" variant='p'>{value.CompanyContact}</Typography>
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
                        <Typography component="p" variant='p'> Name :- Lakshmi</Typography>
                        <Typography component="p" variant='p'>Contact :- 8602486937</Typography>
                        <Typography component="p" variant='p'>Email :- Lvlaxmi@gmail.com</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Typography component="h6" variant='h6'>SHIP TO:-</Typography>
                        <Typography component="p" variant='p'> Name :- Amazone</Typography>
                        <Typography component="p" variant='p'>Address :- delhi </Typography>
                        <Typography component="p" variant='p'>Pin :- 462016</Typography>
                        <Typography component="p" variant='p'>City :- Delhi</Typography>
                        <Typography component="p" variant='p'>Country :- India</Typography>
                    </Grid>
                </Grid>
            </Card>
            <Card variant="outlined" style={styles.container}>
                <CardContent >
                    {/* <Grid item sm={12} xs={12}>
                        <CTable>
                            <CTableHead>
                                <CTableRow active>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Qty</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Rate</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Price</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            <CTableBody>
                                <CTableRow active>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Mark</CTableDataCell>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                </CTableRow>
                                <CTableRow active>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Jacob</CTableDataCell>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                </CTableRow>
                                <CTableRow active>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Jacob</CTableDataCell>
                                    <CTableDataCell>1</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                </CTableRow>
                                <CTableRow active style={styles.Total}>
                                    <CTableHeaderCell scope="row" >Total</CTableHeaderCell>
                                    <CTableDataCell></CTableDataCell>
                                    <CTableDataCell>3</CTableDataCell>
                                    <CTableDataCell>300</CTableDataCell>
                                    <CTableDataCell>100</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>

                    </Grid> */}

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