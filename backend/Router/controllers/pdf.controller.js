import dbConnect from "../../database/db_service.js";
import { ObjectId } from "mongodb";
import PDFDocument from 'pdfkit';
import pkg from 'pdfkit';
const { fontSize } = pkg;

import fs from 'fs';

const generatePdf = async (req, res) => {

    console.log('request received');
    let db = await dbConnect();
    var o_id = new ObjectId("645dff68923d75e061eaaa2a");
    try {
        const collection = db.collection("bill_details");
        const data = await collection.findOne({ _id: o_id });

        // Create a new PDF document
        const doc = new PDFDocument();

        // Set response headers for the PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="generated_pdf.pdf"');

        // Pipe the PDF document to the response stream
        doc.pipe(res);



        // Write content to the PDF

        // Set up grid dimensions
        const cellWidth = 300;
        const cellHeight = 20;
        const startX = 50;
        const startY = 50;

        // Function to position text inside a cell
        function positionText(text, x, y, fontSize = 12, color = 'black') {
            doc.fontSize(fontSize).fillColor(color).text(text, x, y);
        }

        // Company information
        positionText('INVOICE', startX, startY, 30, "blue");

        // positionText('Amazon pvt ltd', startX, startY + cellHeight);
        // positionText('B-102, sector 1, anand nagar', startX, startY + cellHeight * 2);
        // positionText('New Delhi, 396212, India', startX, startY + cellHeight * 3);
        // doc.moveDown();
        // doc.moveDown();

        // Invoice number and date
        // positionText('Invoice Number:15633214', startX + cellWidth, startY, cellHeight);
        // positionText(`Bill Date: ${data.billDate}`, startX + cellWidth, startY + cellHeight * 3);
        // doc.moveDown();



        // Bill To and Ship To
        // positionText('Bill To:', startX, startY + cellHeight * 4, 14, { underline: true });
        // positionText(data.billTo.clientName, startX, startY + cellHeight * 5);
        // positionText(data.billTo.clientContact, startX, startY + cellHeight * 6);
        // positionText(data.billTo.clientEmail, startX, startY + cellHeight * 7);

        // positionText('Ship To:', startX + cellWidth, startY + cellHeight * 4, 14, { underline: true });
        // positionText(data.billTo.clientName, startX + cellWidth, startY + cellHeight * 5);
        // positionText(data.billTo.clientAddress, startX + cellWidth, startY + cellHeight * 6);
        // positionText(`Client City: ${data.billTo.clientCity} ${data.billTo.clientState} ${data.billTo.clientPin}`, startX + cellWidth, startY + cellHeight * 7);
        // doc.moveDown();

        // Notes
        positionText('Notes:', startX, startY + cellHeight * 30, 14, { underline: true });
        positionText(data.notes, startX, startY + cellHeight * 31);
        doc.moveDown();
        // Finalize the PDF document
        doc.end();

    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }

};

export default generatePdf;
