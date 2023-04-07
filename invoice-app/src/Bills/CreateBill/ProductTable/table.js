import { MdDeleteForever } from "react-icons/md";

function Table({ tableData, deleteTableData }) {
    console.log(tableData)
    return (

        <table className="table">
            {(tableData.length !== 0) ?
                <thead>
                    <tr>
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
                            <td>{data.rate}</td>
                            <td>{data.price}</td>
                            <td>< MdDeleteForever size={30} color="red" onClick={deleteTableData} /></td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
export default Table;