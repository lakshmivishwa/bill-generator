import * as React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import Table from "../../BillComponents/Table/table"
import { useState } from 'react';
function ItemForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [tableData, setTableData] = useState([]);
    const [formObject, setFormObject] = useState({
        itemName: "",
        itemDescription: "",
        qty: "",
        rate: "",
        price: "",
        action: "",
    });
    const onValChange = (event) => {
        console.log(event)
        const value = {
            ...formObject,
            [event.target.name]: event.target.value,
        };

        if (event.target.name === value.qty || value.rate) {
            value.price = value.qty * value.rate;

        }
        console.log(value);
        setFormObject(value);

    }


    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("formObject",formObject);

        const checkVal = !Object.values(formObject).every((res) => res === "");
        if (checkVal) {

            // const dataObj = (data) => [...data, formObject];
            const data = { ...formObject, id: tableData.length + 1 };

            setTableData([...tableData, data]);
            console.log(tableData);

            const isEmpty = {
                itemName: "",
                itemDescription: "",
                qty: "",
                rate: "",
                price: "",
                action: ""
            };
            setFormObject(isEmpty);
        }

    };

    const removeTableData = (index) => {
        console.log("deleted");
        const rows = [...tableData];
        console.log(tableData);
        rows.splice(index, 1);
        setTableData(rows);
    }



    return (
        <Container >
            {/* <form onSubmit={handleSubmit(onFormSubmit)}> */}
            <Grid container spacing={2} mt={1} mb={3}>
                <Grid item xs={5} md={7}  >
                    <Typography mt={3} mb={2} variant="h6" component="h5">Item</Typography>
                    <TextField name="itemName" fullWidth label="Item Name"
                        {...register('itemName', {
                            required: "**Please fill in this field**",
                        })}
                        margin="dense"
                        size="small"
                        error={errors.itemName}
                        helperText={errors.itemName?.message}
                        onChange={onValChange}
                        value={formObject.itemName}
                    />
                </Grid>

                <Grid item xs={2} md={1}>
                    <Typography mt={3} mb={2} variant="h6" component="h5">Qty</Typography>
                    <TextField name="qty" fullWidth label="qty"
                        {...register('qty', {
                            required: "**Please fill in this field**",
                        })}
                        margin="dense"
                        size="small"
                        error={errors.qty}
                        helperText={errors.qty?.message}
                        onChange={onValChange}
                        value={formObject.qty}
                    />
                </Grid>

                <Grid item xs={2} md={2}>
                    <Typography mt={3} mb={2} variant="h6" component="h5">Rate</Typography>
                    <TextField name="rate" fullWidth label=" rate"
                        {...register('rate', {
                            required: "**Please fill in this field**",
                        })}
                        margin="dense"
                        size="small"
                        error={errors.rate}
                        helperText={errors.rate?.message}
                        onChange={onValChange}
                        value={formObject.rate}
                    />
                </Grid>

                <Grid item xs={2} md={2}>
                    <Typography mt={3} mb={2} variant="h6" component="h5">Price</Typography>
                    <TextField name="price" fullWidth label="Price"
                        margin="dense"
                        size="small"
                        value={formObject.price} />

                </Grid>

                <Grid item xs={5} md={7}>
                    <TextField name="itemDescription" fullWidth label="item Description"
                        {...register('itemDescription', {
                            required: "**Please fill in this field**",
                        })}
                        margin="dense"
                        size="small"
                        error={errors.itemDescription}
                        helperText={errors.itemDescription?.message}
                        onChange={onValChange}
                        value={formObject.itemDescription}

                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <Button variant="contained" type="button" onClick={onFormSubmit}>Add Item</Button>
                </Grid>

            </Grid>

            {/* </form> */}
            <Table tableData={tableData} deleteTableData={removeTableData} />
        </Container >



    );
}
export default ItemForm;