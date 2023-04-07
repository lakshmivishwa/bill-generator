import React, { useState, Fragment } from "react";
import ItemForm from "./ItemForm";
import Table from "./table";


function ProductDetail() {
	const [tableData, setTableData] = useState([]);
	const [formObject, setFormObject] = useState({
		itemName: "",
		ItemDescription: "",
		qty: "",
		rate: "",
		price: "",
		action: ""
	});
	const onValChange = (event) => {
		console.log(event)
		const value = (res) => ({
			...res,
			[event.target.name]: event.target.value,
		});
		setFormObject(value);
	};

	const onFormSubmit = (event) => {
		console.log(event);
		event.preventDefault();
		const checkVal = !Object.values(formObject).every((res) => res === "");
		if (checkVal) {
			const dataObj = (data) => [...data, formObject];
			setTableData(dataObj);
			console.log(dataObj);
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
	console.log(tableData);
	console.log(formObject);


	const removeTableData = (index) => {
		console.log("deleted");
		const rows = [...tableData];
		rows.splice(index, 1);
		setTableData(rows);
	}

	return (
		<Fragment>
			<Table tableData={tableData} deleteTableData={removeTableData} />
			<ItemForm
				onValChange={onValChange}
				formObject={formObject}
				onFormSubmit={onFormSubmit}
			/>
		</Fragment>
	);
}
export default ProductDetail;