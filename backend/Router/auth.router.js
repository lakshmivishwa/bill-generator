import { Router } from "express"
import express from 'express';

const router = express.Router();
import generatePdf from './controllers/pdf.controller.js';
import { signIn, register, billdetails } from './controllers/auth.controller.js';

// router.post("/", signIn);

router.post("/signin", signIn);

router.post("/register", register)

router.post("/billdetails", billdetails);

router.get("/generatePdf/1", generatePdf)

export default router;



    //   // Line Items
    //     // Add line items table
    //     doc.fontSize(10);

    //     const table = {
    //         headers: ['ID', 'Item Name', 'Description', 'Quantity', 'Rate', 'Price'],
    //         rows: []
    //     };

    //     // Add line items to the table
    //     data.lineItems.forEach(item => {
    //         const row = [
    //             item.id.toString(),
    //             item.itemName,
    //             item.itemDescription,
    //             item.qty.toString(),
    //             item.rate.toString(),
    //             item.price.toString()
    //         ];
    //         table.rows.push(row);
    //     });

    //     // Calculate the width of each column
    //     const columnWidths = [40, 150, 200, 60, 60, 80];

    //     // Draw table headers
    //     table.headers.forEach((header, columnIndex) => {
    //         doc.fillColor('black').text(header, doc.x, doc.y, { width: columnWidths[columnIndex], align: 'left' });
    //         doc.moveUp().strokeColor('black').lineWidth(0.5).rect(doc.x, doc.y, columnWidths[columnIndex], 20).stroke();
    //     });

    //     doc.moveDown();

    //    // Draw table rows
    //     table.rows.forEach(row => {
    //         row.forEach((cell, columnIndex) => {
    //             doc.fillColor('black').text(cell, doc.x, doc.y, { width: columnWidths[columnIndex], align: 'left' });
    //             doc.moveUp().strokeColor('black').lineWidth(0.5).rect(doc.x, doc.y, columnWidths[columnIndex], 20).stroke();
    //         });
    //         doc.moveDown();
    //     });

    //     doc.moveDown();