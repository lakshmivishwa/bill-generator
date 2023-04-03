import { Button } from "@mui/material";
import { useState } from "react"
// import { Button } from '@mui/material';
function AddRemoveInputField() {

    const [inputFields, setInputFields] = useState([{
        // fullName: '',

    }]);

    const addInputField = () => {
        setInputFields([...inputFields, {
            // fullName: '',
        }])

    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt) => {

        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
        console.log(list)
    }
    return (

        <div className="container">
            <div className="row">
                <div className="col-sm-8">

                    {
                        inputFields.map((data, index) => {
                            const { itemName, itemDescription, qty, rate } = data;
                            return (
                                <div className="row my-3" key={index}>
                                    <div className="col">
                                        <div className="form-group">

                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={itemName} name="itemName" className="form-control" placeholder="item-Name" />
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={itemDescription} name="itemDescription" className="form-control" placeholder=" item-Description" />
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={qty} name="qty" className="form-control" placeholder="qty" />
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={rate} name="rate" className="form-control" placeholder="rate" />

                                        </div>

                                    </div>

                                    <div className="col">

                                        {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>x</button> : ''}

                                    </div>
                                </div>
                            )
                        })
                    }

                    <div className="row">
                        <div className="col-sm-12">
                            <Button variant="contained" onClick={addInputField}>Add New</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">

            </div>
        </div>

    )
}
export default AddRemoveInputField