import { ObjectId } from "mongodb";
import ejs from 'ejs';
import fs from 'fs';
import pdf from 'html-pdf';

const generatePdf = async (req, res) => {
    const id = req.params.id;
    console.log('request received');
    var o_id = new ObjectId(id);
    console.log(o_id);
    try {
        const collection = req.db.collection("bill_details");
        const data = await collection.findOne({ _id: o_id });

        console.log(data);

        // Render the EJS template
        const ejsTemplate = fs.readFileSync('views/template.ejs', 'utf-8');
        const html = ejs.render(ejsTemplate, { data });

        // Configure the PDF options
        const pdfOptions = {
            format: 'Letter',
            border: {
                top: '1in',
                right: '1in',
                bottom: '1in',
                left: '1in'
            },
        };

        // Generate the PDF
        pdf.create(html, pdfOptions).toStream((err, stream) => {
            if (err) {
                console.error('Failed to generate PDF', err);
                throw err;
            }

            // Set response headers for the PDF
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename="generated_pdf.pdf"');

            // Pipe the PDF stream to the response
            stream.pipe(res);
        });
    } catch (error) {
        console.error('Failed to retrieve data from MongoDB', error);
        throw error;
    }
};

export default generatePdf;
