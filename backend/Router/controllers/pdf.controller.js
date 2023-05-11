var o_id = new ObjectId("645cadd408e2cc4ce360ec8a");
import dbConnect from "../../database/db_service.js";
import { ObjectId } from "mongodb";
import PDFDocument from 'pdfkit';
import fs from 'fs';

const generatePdf = async (req, res) => {
    console.log('request recived')

    let db = await dbConnect();

    try {
        const collection = db.collection("bill_details");
        // Query MongoDB and retrieve the data 
        const data = await collection.findOne({ _id: o_id })
        console.log(data);
        return res.json('success');

    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }
   

    // const doc = new PDFDocument();

    // // Add content to the document
    // doc.text(`Bill Details for ${data.billTo.clientName}`);
    // doc.text(`Bill Details for ${data.billTo.clientName}`);
    // doc.text(`Bill Details for ${data.billTo.clientName}`);

    // // Send the PDF as a response
    // res.setHeader('Content-Type', 'application/pdf');
    // res.setHeader('Content-Disposition', `attachment; filename=bill-${data.billTo.clientName}.pdf`);
    // doc.pipe(res);
    // doc.end();
};

export { generatePdf };