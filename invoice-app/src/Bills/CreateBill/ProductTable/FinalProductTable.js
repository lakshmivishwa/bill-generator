import React, { useState, Fragment } from "react";
import ItemForm from "./ItemForm";
import Table from "./Table/table";


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
		const value = (res) => ({
			...res,
			[event.target.name]: event.target.value,
		});
		setFormObject(value);
	};

	let priceSum = 0;
	console.log(priceSum);
	const onFormSubmit = (event) => {
		event.preventDefault();
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