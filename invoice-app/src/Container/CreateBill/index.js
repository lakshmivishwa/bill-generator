import * as React from 'react';
import { Grid, Typography, Container, Button, Card, CardContent, Link } from '@mui/material';
import styles from "./style";
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"
import { useSelector } from 'react-redux'
import BillPreview from '../BillPreview';
import Table from '../../Component/BillComponents/LineItem';
import CreateItem from '../../Component/BillComponents/CreateItem';
import * as myConstClass from '../../Error';

export default function NewCreateBill() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const errorMsg = myConstClass.requiredField;

    const loggedUserAddress = useSelector((state) => state.loggedInReducer)
    let userAddressDetail = loggedUserAddress.signIn.response;

    const [preview, setPreview] = useState(false);
    const [billFrom, setBillFrom] = useState({
        vendorAddress: userAddressDetail.address,
        vendorCityPincode: userAddressDetail.cityPincode,
        vendorContact: userAddressDetail.contact,
        vendorState: userAddressDetail.state,
        vendorName: userAddressDetail.name,
        vendorEmail: userAddressDetail.email,
    });
    const [billTo, setBillTo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [notes, setNotes] = useState("");

    const billData = {
        billTo: billTo,
        billFrom: billFrom,
        lineItems: tableData,
        billDate: new Date(),
        notes: notes
    };
    console.log(billData);

    function onSubmit(data) {
        let dataObject = {
            clientAddress: data.clientAddress,
            clientCityPin: data.clientCityPin,
            clientContact: data.clientContact,
            clientName: data.clientName,
            clientState: data.clientState,
        }
        let notes = data.notes;
        setNotes(notes)
        setBillTo(dataObject)
        setPreview("true")

    }

    const cancelPreview = () => {
        setPreview(false)
    }

    const printHandlier = () => {
        window.print();
    }

    const removeItem = (index) => {
        console.log("deleted");
        const rows = [...tableData];
        console.log(tableData);
        rows.splice(index, 1);
        setTableData(rows);
    }

    const addItem = (item) => {
        setTableData([...tableData, { id: tableData.length + 1, ...item }]);
    }

    return (

        <Container maxWidth="md" >
            <Card sx={{ minWidth: 275 }} mt={3} mb={3}>
                <CardContent>
                    {!preview ?
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <Typography mt={3} mb={2} variant="h6" component="h5">Bill To:-</Typography>

                                    <TextField fullWidth label="Who is this invoice to?"
                                        {...register('clientName', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientName}
                                        helperText={errors.clientName?.message}
                                    />

                                    <TextField name="clientEmail" fullWidth label="Email Address"
                                        {...register('clientEmail', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientEmail}
                                        helperText={errors.clientEmail?.message}
                                    />

                                    <TextField name="clientContact" fullWidth label="Contact no"
                                        {...register('clientContact', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientContact}
                                        helperText={errors.clientContact?.message}
                                    />

                                    <TextField fullWidth label="Address"
                                        {...register('clientAddress', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientAddress}
                                        helperText={errors.clientAddress?.message}
                                    />

                                    <TextField name="clientCityPin" fullWidth label="City and Pin-code"
                                        {...register('clientCityPin', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientCityPin}
                                        helperText={errors.clientCityPin?.message}
                                    />

                                    <TextField name="clientState" fullWidth label="State"
                                        {...register('clientState', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientState}
                                        helperText={errors.clientState?.message}
                                    />
                                </Grid>

                                <Grid item xs={6} md={6}>
                                    <Typography mt={3} mb={2} variant="h6" component="h5">Bill From:-</Typography>

                                    <TextField name="vendorName" fullWidth label="Who is this invoice from?"
                                        {...register('vendorName', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorName}
                                        helperText={errors.vendorName?.message}
                                        onChange={data => setBillFrom({
                                            vendorName: data.vendorName
                                        })}
                                        value={billFrom.vendorName}
                                    />

                                    <TextField name="vendorEmail" fullWidth label="Email Address"
                                        {...register('vendorEmail', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorEmail}
                                        helperText={errors.vendorEmail?.message}
                                        onChange={data => setBillFrom({
                                            vendorEmail: data.vendorEmail
                                        })}
                                        value={billFrom.vendorEmail}
                                    />

                                    <TextField name="vendorContact" fullWidth label="Contact"
                                        {...register('vendorContact', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorContact}
                                        helperText={errors.vendorContact?.message}
                                        onChange={data => setBillFrom({
                                            vendorContact: data.vendorContact
                                        })}
                                        value={billFrom.vendorContact}
                                    />

                                    <TextField name="vendorAddress" fullWidth label="Address"
                                        {...register('vendorAddress', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorAddress}
                                        helperText={errors.vendorAddress?.message}
                                        onChange={data => setBillFrom({
                                            vendorAddress: data.vendorAddress
                                        })}
                                        value={billFrom.vendorAddress}
                                    />

                                    <TextField name="vendorCityPin" fullWidth label="City and Pin-code"
                                        {...register('vendorCityPin', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorCityPin}
                                        helperText={errors.vendorCityPin?.message}
                                        onChange={data => setBillFrom({
                                            vendorCityPincode: data.vendorCityPincode
                                        })}
                                        value={billFrom.vendorCityPincode}
                                    />

                                    <TextField name="vendorState" fullWidth label="State"
                                        {...register('vendorState', {
                                            required: errorMsg,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorState}
                                        helperText={errors.vendorState?.message}
                                        onChange={data => setBillFrom({
                                            vendorState: data.vendorState
                                        })}
                                        value={billFrom.vendorState}
                                    />
                                </Grid>
                            </Grid>

                            <Grid container spacing={2} mt={5}>
                                <CreateItem
                                    addItem={addItem}
                                />
                            </Grid>

                            <Table
                                tableData={tableData}
                                deleteItem={removeItem}

                            />


                            <Grid container spacing={2} mt={5}>
                                <Grid item xs={12} md={6}>
                                    <Card style={styles.CardComponent} >
                                        <Typography mt={3} mb={1} variant="h5" component="h5" >Notes:-</Typography>
                                        < TextField name="notes" label=""
                                            {...register('notes', {
                                                required: "**Please write some notes**",
                                            })}
                                            multiline
                                            rows={4}
                                            margin="dense"
                                            size="small"
                                            error={errors.notes}
                                            helperText={errors.notes?.message}
                                        />
                                    </Card>

                                </Grid>

                                <Grid item xs={12} md={1}>
                                </Grid>

                                <Grid item xs={12} md={5}>

                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={6} md={7}>
                                            <Typography mt={3} variant="h5" component="h5">Sub-Total:- </Typography>
                                            <Typography variant="h5" component="h5">Discountl:-</Typography>
                                            <Typography variant="h5" component="h5">Tax:-</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={5} style={styles.Total}>
                                            <Typography mt={3} variant="h5" component="h6">1</Typography>
                                            <Typography variant="h5" component="h5">-</Typography>
                                            <Typography variant="h5" component="h5">-</Typography>
                                        </Grid>
                                    </Grid>

                                    <hr />

                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={6} md={7}>
                                            <Typography variant="h5" component="h5">Total:-</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={5} style={styles.Total}>
                                            <Typography variant="h5" component="h5">1</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid container spacing={2} mb={2} mt={5}>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" type="submit" >Download</Button>
                                </Grid>

                            </Grid>
                        </form >
                        :
                        <BillPreview
                            handleClick={cancelPreview}
                            handlePrint={printHandlier}
                            billTo={billTo}
                            billFrom={billFrom}
                            itemList={tableData}
                            notes={notes}

                        />
                    }

                </CardContent>
            </Card>
        </Container>
    );
}
