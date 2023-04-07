import * as React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form"

function ItemForm({ onValChange, formObject, onFormSubmit }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (

        <form >
            <Grid container spacing={2} mt={3} mb={3}>
                <Grid item xs={4} md={6}  >
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
                    <TextField name="itemDescription" fullWidth label="itemDescription"
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
                    <TextField name="price" fullWidth label=" price"

                        margin="dense"
                        size="small"
                        // error={errors.price}
                        // helperText={errors.price?.message}
                        onChange={onValChange}
                        value={formObject?.qty * formObject?.rate}

                    />

                </Grid>
                <Grid item xs={2} md={1}>
                    <Typography mt={3} mb={2} variant="h6" component="h6">Action</Typography>
                    {/* {inputFields.length > 1 && (
                    <Button onClick={removeInputFields} >
                        < MdDeleteForever size={30} color="red" /></Button>
                )} */}
                </Grid>

                <Grid item xs={12} md={12}>
                    {/* {inputFields.length - 1 === index && inputFields.length < 4 && ( */}
                    <Button variant="contained" type="submit" onClick={onFormSubmit}>Add Item</Button>
                    {/* )} */}
                </Grid>
            </Grid>

        </form>

    );
}
export default ItemForm;