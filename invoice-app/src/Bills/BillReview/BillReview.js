import React from "react";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import styles from "./style";
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react'
import { Container } from '@mui/material';
import { Button } from '@mui/material';

function BillReview() {

    const ref = React.createRef();
    return (

        <Container maxWidth="md" ref={ref}>
            <Card variant="outlined" style={styles.container}>
                <Grid container spacing={1} style={styles.Gridcontainer}>
                    <Grid item sm={7} xs={12}>
                        <Typography component="h6" variant='h6'> ABC Furniture Co.</Typography>
                        <Typography component="p" variant='p'> #101 tree street, Leaf vale , delhi 110001</Typography>
                        <Typography component="p" variant='p'>Contact:-9896369856</Typography>
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
                    <Grid item sm={12} xs={12}>
                        <CTable>
                            <CTableHead>
                                <CTableRow active>
                                    <CTableHeaderCell scope="col">#</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                    <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>

                            <CTableBody>
                                <CTableRow active>
                                    <CTableHeaderCell scope="row">1</CTableHeaderCell>
                                    <CTableDataCell>Mark</CTableDataCell>
                                    <CTableDataCell>Otto</CTableDataCell>
                                    <CTableDataCell>@mdo</CTableDataCell>
                                </CTableRow>
                                <CTableRow active>
                                    <CTableHeaderCell scope="row">2</CTableHeaderCell>
                                    <CTableDataCell>Jacob</CTableDataCell>
                                    <CTableDataCell>Thornton</CTableDataCell>
                                    <CTableDataCell>@fat</CTableDataCell>
                                </CTableRow>
                                <CTableRow active>
                                    <CTableHeaderCell scope="row">3</CTableHeaderCell>
                                    <CTableDataCell colSpan={2} active>
                                        Larry the Bird
                                    </CTableDataCell>
                                    <CTableDataCell>@twitter</CTableDataCell>
                                </CTableRow>
                            </CTableBody>
                        </CTable>
                    </Grid>
                </CardContent>
            </Card>

            <Card variant="outlined" style={styles.container}>
                <CardContent >
                    <Typography component="p" variant='p'>Notes :- Thank you for the business</Typography>
                </CardContent>
            </Card>
            <Button variant="contained" >Download Bill</Button>
        </Container>

    )
}

export default BillReview;