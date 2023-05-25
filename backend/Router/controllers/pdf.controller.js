import { ObjectId } from "mongodb";
import PDFDocument from 'pdfkit';
import pkg from 'pdfkit';
const { fontSize } = pkg;
import fs from 'fs';

const generatePdf = async (req, res) => {
    const id = req.params.id;
    console.log('request received');
    var o_id = new ObjectId(id);
    console.log(o_id);
    try {
        const collection = req.db.collection("bill_details");
        const data = await collection.findOne({ _id: o_id });

        console.log(data);
        // Create a new PDF document
        const doc = new PDFDocument();

        // Set response headers for the PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="generated_pdf.pdf"');

        // Pipe the PDF document to the response stream
        doc.pipe(res);

        // Set up grid dimensions
        const cellWidth = 30;
        const cellHeight = 20;
        const startX = 30;
        const startY = 30;

        // Function to position text inside a cell
        function positionText(text, x, y, fontSize = 12, color = 'black') {
            doc.fontSize(fontSize).fillColor(color).text(text, x, y);
        }

        //Header
        positionText('INVOICE', startX, startY, 30, "#4B0082", "arial")
        positionText(data.invoiceNumber, startX + cellWidth + 250, startY, cellHeight);
        positionText('Bill Date' + ':- ' + data.billDate, startX + cellWidth + 290, startY + cellHeight);


        // Bill To
        positionText('BILL TO:', startX, startY + cellHeight * 4, 16, "#097969");
        positionText(data.billTo.clientName, startX, startY + cellHeight * 5);
        positionText(data.billTo.clientContact, startX, startY + cellHeight * 6);
        positionText(data.billTo.clientEmail, startX, startY + cellHeight * 7);
        positionText(data.billTo.clientAddress, startX, startY + cellHeight * 8);
        positionText(data.billTo.clientCity + ', ' + data.billTo.clientPin + ', ' + data.billTo.clientState, startX, startY + cellHeight * 9);

        // Bill From
        positionText('BILL FROM:', startX + cellWidth + 240, startY + cellHeight * 4, 16, "#097969");
        positionText(data.billFrom.vendorName, startX + cellWidth + 240, startY + cellHeight * 5);
        positionText(data.billFrom.vendorContact, startX + cellWidth + 240, startY + cellHeight * 6);
        positionText(data.billFrom.vendorEmail, startX + cellWidth + 240, startY + cellHeight * 7);
        positionText(data.billFrom.vendorAddress, startX + cellWidth + 240, startY + cellHeight * 8);
        positionText(data.billFrom.vendorCity + ', ' + data.billFrom.vendorPin + ', ' + data.billFrom.vendorState, startX + cellWidth + 240, startY + cellHeight * 9);


        // Create the table headers
        positionText('S.No.', startX, startY + cellHeight * 12, 12, "#097969", 'Helvetica-Bold');
        positionText('Item Name', startX + cellWidth * 2, startY + cellHeight * 12, 12, "#097969", 'Helvetica-Bold');
        positionText('Item Description', startX + cellWidth * 7, startY + cellHeight * 12, 12, "#097969", 'Helvetica-Bold');
        positionText('Qty', startX + cellWidth * 13, startY + cellHeight * 12, 12, "#097969", 'Helvetica-Bold');
        positionText('Rate', startX + cellWidth * 15, startY + cellHeight * 12, 12, "#097969", 'Helvetica-Bold');
        positionText('Price', startX + cellWidth * 17, startY + cellHeight * 12, 12, "#097969", 'Helvetica-Bold');

        // Calculate the total price
        const totalPrice = data.lineItems.reduce((total, item) => total + item.price, 0);

        // Iterate over the lineItems array to create the table rows
        data.lineItems.forEach((item, index) => {
            const rowY = startY + cellHeight * (13 + index);
            positionText(item.id.toString(), startX, rowY);
            positionText(item.itemName, startX + cellWidth * 2, rowY);
            positionText(item.itemDescription, startX + cellWidth * 7, rowY);
            positionText(item.qty, startX + cellWidth * 13, rowY);
            positionText(item.rate, startX + cellWidth * 15, rowY);
            positionText(item.price.toString(), startX + cellWidth * 17, rowY);
        });

        // Display the total price
        const totalY = startY + cellHeight * (13 + data.lineItems.length + 1);
        positionText('Total:', startX + cellWidth * 15, totalY, 12, "#097969", 'Helvetica-Bold');
        positionText(totalPrice.toString(), startX + cellWidth * 17, totalY, 12, 'black', 'Helvetica-Bold');

        // Bank details
        positionText('PAYMENT METHOD:', startX, startY + cellHeight * 26, 16, "#097969");
        positionText(data.accountDetail?.accountHolder, startX, startY + cellHeight * 27);
        positionText(data.accountDetail?.accountNumber, startX, startY + cellHeight * 28);
        positionText(data.accountDetail?.bankName, startX, startY + cellHeight * 29);
        positionText(data.accountDetail?.ifscCode, startX, startY + cellHeight * 30);

        // Notes
        positionText(data.notes, startX + cellWidth + 150, startY + cellHeight * 33, 14, "#4B0082");
        doc.end();

    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }

};

export default generatePdf;
