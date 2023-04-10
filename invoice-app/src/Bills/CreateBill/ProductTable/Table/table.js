import { MdDeleteForever } from "react-icons/md";
import { Grid, Container } from '@mui/material';
import styles from "./style";
function Table({ tableData, deleteTableData }) {

    // console.log(sum);
    console.log(tableData)
    return (
        <Container maxWidth="md">
            <Grid container spacing={2} mt={3}>
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
                    </table>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Table;