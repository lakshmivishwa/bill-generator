import * as React from 'react';
import { Grid, Typography, Button, Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";


function ItemForm({ onValChange, formObject, onFormSubmit }) {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Container >
            <form >
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
                        <Button variant="contained" onClick={onFormSubmit}>Add Item</Button>
                    </Grid>

                </Grid>

            </form>

        </Container >

    );
}
export default ItemForm;