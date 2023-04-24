import React, { useState, Fragment } from "react";
import ItemForm from "../ItemForm/ItemForm";
import Table from "../Table/table";


function ProductDetail() {

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
		// event.preventDefault();
		console.log(formObject);

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
		<Fragment>
			<ItemForm
				onValChange={onValChange}
				formObject={formObject}
				onFormSubmit={onFormSubmit}
			/>
			<Table tableData={tableData} deleteTableData={removeTableData} />
		</Fragment>
	);
}
export default ProductDetail;