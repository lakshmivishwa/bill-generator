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
import { requiredField } from '../../Error';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function NewCreateBill() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const loggedInUser = useSelector((state) => state.loggedInReducer);
    console.log(loggedInUser);
    let userDetail = loggedInUser.signIn;
    console.log(userDetail);

    const [preview, setPreview] = useState(false);
    const [billFrom, setBillFrom] = useState({
        vendorAddress: userDetail.address,
        vendorCity: userDetail.city,
        vendorPin: userDetail.pincode,
        vendorContact: userDetail.contact,
        vendorState: userDetail.state,
        vendorName: userDetail.name,
        vendorEmail: userDetail.email,
    });
    
    const [billTo, setBillTo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [notes, setNotes] = useState("");

    console.log(billFrom);

    function onSubmit(data) {
        console.log(data);
        let billToData = {
            clientAddress: data.clientAddress,
            clientCity: data.clientCity,
            clientPin: data.clientPin,
            clientContact: data.clientContact,
            clientName: data.clientName,
            clientState: data.clientState,
        }

        // let billFromData = {
        //     vendorAddress: data.vendorAddress,
        //     vendorCity: data.vendorCity,
        //     vendorPin: data.vendorPin,
        //     vendorContact: data.vendorContact,
        //     vendorState: data.vendorState,
        //     vendorName: data.vendorName,
        //     vendorEmail: data.vendorEmail,
        // }
        let notes = data.notes;
        setNotes(notes)
        setBillTo(billToData)
        setBillFrom(billFrom)
        setPreview("true")

    }

    const cancelPreview = () => {
        setPreview(false)
    }


    const billData = {
        billTo: billTo,
        billFrom: billFrom,
        lineItems: tableData,
        billDate: new Date(),
        notes: notes,

    };
    console.log(billData);

    async function downloadHandlier() {
        console.log(billData);
        await axios.post(`http://localhost:4000/billdetails`,
            billData)
            .then((response) => {
                console.log(response);
                // console.log(response.message);
                // navigate("/signin")
            })
    }
    async function printPdf() {

        await axios.get('http://localhost:4000/billdetails')


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

        <Container maxWidth="md" style={styles.MainContainer} >
            <Card sx={{ minWidth: 275 }} mb={3} style={styles.CardComponent} >
                <CardContent>
                    {!preview ?
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <Grid container spacing={2}>
                                <Grid item xs={6} md={6}>
                                    <Typography mt={3} mb={2} variant="h6" component="h5">Bill To:-</Typography>

                                    <TextField fullWidth label="Who is this invoice to?"
                                        {...register('clientName', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientName}
                                        helperText={errors.clientName?.message}
                                    />

                                    <TextField name="clientEmail" fullWidth label="Email Address"
                                        {...register('clientEmail', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientEmail}
                                        helperText={errors.clientEmail?.message}
                                    />

                                    <TextField name="clientContact" fullWidth label="Contact no"
                                        {...register('clientContact', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientContact}
                                        helperText={errors.clientContact?.message}
                                    />

                                    <TextField fullWidth label="Address"
                                        {...register('clientAddress', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientAddress}
                                        helperText={errors.clientAddress?.message}
                                    />

                                    <TextField name="clientCity" fullWidth label="City"
                                        {...register('clientCity', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientCity}
                                        helperText={errors.clientCity?.message}
                                    />

                                    <TextField name="clientPin" fullWidth label=" Pin-code"
                                        {...register('clientPin', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.clientPin}
                                        helperText={errors.clientPin?.message}
                                    />


                                    <TextField name="clientState" fullWidth label="State"
                                        {...register('clientState', {
                                            required: requiredField,
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
                                            required: requiredField,
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
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorEmail}
                                        helperText={errors.vendorEmail?.message}
                                        value={billFrom?.vendorEmail}
                                        onChange={data => setBillFrom({
                                            vendorEmail: data.vendorEmail
                                        })}

                                    />

                                    <TextField name="vendorContact" fullWidth label="Contact"
                                        {...register('vendorContact', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorContact}
                                        helperText={errors.vendorContact?.message}
                                        value={billFrom?.vendorContact}
                                        onChange={data => setBillFrom({
                                            vendorContact: data.vendorContact
                                        })}

                                    />

                                    <TextField name="vendorAddress" fullWidth label="Address"
                                        {...register('vendorAddress', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorAddress}
                                        helperText={errors.vendorAddress?.message}
                                        value={billFrom?.vendorAddress}
                                        onChange={data => setBillFrom({
                                            vendorAddress: data.vendorAddress
                                        })}

                                    />

                                    <TextField name="vendorCity" fullWidth label="City"
                                        {...register('vendorCity', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorCity}
                                        helperText={errors.vendorCity?.message}
                                        value={billFrom?.vendorCity}
                                        onChange={data => setBillFrom({
                                            vendorCity: data.vendorCity
                                        })}

                                    />

                                    <TextField name="vendorPincode" fullWidth label="Pin-code"
                                        {...register('vendorPincode', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorPincode}
                                        helperText={errors.vendorPincode?.message}
                                        value={billFrom?.vendorPin}
                                        onChange={data => setBillFrom({
                                            vendorPin: data.vendorPin
                                        })}

                                    />

                                    <TextField name="vendorState" fullWidth label="State"
                                        {...register('vendorState', {
                                            required: requiredField,
                                        })}
                                        margin="dense"
                                        size="small"
                                        id="fullWidth"
                                        error={errors.vendorState}
                                        helperText={errors.vendorState?.message}
                                        value={billFrom?.vendorState}
                                        onChange={data => setBillFrom({
                                            vendorState: data.vendorState
                                        })}

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
                                    <Card style={styles.NoteCardComponent} >
                                        <Typography mt={3} mb={1} variant="h5" component="h5" >Notes:-</Typography>
                                        < TextField name="notes" label=""
                                            {...register('notes', {
                                                required: requiredField,
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
                                            <Typography variant="h6" component="h5">Sub-Total- </Typography>
                                            <Typography variant="h6" component="h5">Discount -</Typography>
                                            <Typography variant="h6" component="h6">Tax -</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={5} style={styles.Total}>
                                            <Typography variant="h6" component="h5">1</Typography>
                                            <Typography variant="h6" component="h5">-</Typography>
                                            <Typography variant="h6" component="h5">-</Typography>
                                        </Grid>
                                    </Grid>

                                    <hr />

                                    <Grid container spacing={2} mb={2}>
                                        <Grid item xs={6} md={7}>
                                            <Typography variant="h5" component="h5">Total -</Typography>
                                        </Grid>
                                        <Grid item xs={6} md={5} style={styles.Total}>
                                            <Typography variant="h5" component="h5">1</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>

                            <Grid container spacing={2} mb={2} mt={5}>
                                <Grid item xs={12} md={6}>
                                    <Button variant="contained" type="submit" >Preview</Button>
                                </Grid>

                            </Grid>
                        </form >
                        :
                        <BillPreview

                            handleClick={cancelPreview}
                            handlePrint={downloadHandlier}
                            billTo={billTo}
                            billFrom={billFrom}
                            itemList={tableData}
                            notes={notes}
                            printPdf={printPdf}

                        />
                    }

                </CardContent>
            </Card>
        </Container>
    );
}
