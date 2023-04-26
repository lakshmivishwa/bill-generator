import { MdDeleteForever } from "react-icons/md";
import { Grid, Container } from '@mui/material';
import styles from "./style";
// import { useDispatch } from 'react-redux'
// import { itemList } from "../../../../../Redux/Actions/Action";
// import { useState } from "react";

function Table({ tableData, deleteTableData }) {
    // const dispatch = useDispatch();
    console.log(tableData);
    // dispatch(itemList(tableData))

    // let totalQty = 0;
    // let totalRate = 0;
    let totalPrice = 0;
    for (let i = 0; i < tableData.length; i++) {
        // totalQty += parseInt(tableData[i].qty);
        // totalRate += parseInt(tableData[i].rate);
        totalPrice += tableData[i].price;
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={2} mt={3}>
                {/* <h1>hi</h1> */}
                <Grid item xs={12} md={12}  >
                    <table className="table">
                        {(tableData.length !== 0) ?
                            <thead style={styles.TableHead}>
                                <tr >
                                    <th>Sr No</th>
                                    <th>Item Name</th>
                                    <th>Item Description</th>
                                    <th>Qty</th>
                                    <th>Rate</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead> : ''}
                        <tbody>

                            {tableData.map((data, index) => {

                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{data.itemName}</td>
                                        <td>{data.itemDescription}</td>
                                        <td>{data.qty}</td>
                                        <td >{data.rate}</td>
                                        <td>{data.price}</td>
                                        <td>< MdDeleteForever size={30} color="red" onClick={deleteTableData} /></td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        <tbody></tbody>
                        {(tableData.length !== 0) ?
                            <tbody>
                                <tr>
                                    <td>Total</td>
                                    <td></td>
                                    <td></td>
                                    <td>1</td>
                                    <td >1</td>
                                    <td>{totalPrice}</td>
                                    <td></td>
                                </tr>
                            </tbody> : ""
                        }



                    </table>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Table;
