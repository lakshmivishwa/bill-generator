import { ObjectId } from "mongodb";
import ejs from 'ejs';
import fs from 'fs';
import pdf from 'html-pdf';

const generatePdf = async (req, res) => {
    console.log(req);
    const invoiceNumber = "LA66776";
    try {
        fs.readFile(`public/bills/${invoiceNumber}.pdf`, function (err, data) {
            res.contentType('application/pdf');
            res.send(data);
            if (err) {
                console.error(err)
                return
            }

            console.log(data)
        });


    } catch (error) {
        console.log(error)
    }
    // const id = req.params.id;
    // console.log('request received');
    // var o_id = new ObjectId(id);
    // console.log(o_id);
    // try {
    //     const collection = req.db.collection("bill_details");
    //     const data = await collection.findOne({ _id: o_id });
    //     console.log(data);
    //     let invoiceNumber = data.invoiceNumber;
    //     console.log(invoiceNumber);
    //     // Render the EJS template
    //     const ejsTemplate = fs.readFileSync('views/bill.ejs', 'utf-8');
    //     const html = ejs.render(ejsTemplate, { data });

    //     // Configure the PDF options
    //     const pdfOptions = {
    //         format: 'Letter',
    //         border: {
    //             top: '1in',
    //             right: '1in',
    //             bottom: '1in',
    //             left: '1in'
    //         },
    //     };

    //     // Generate the PDF
    //     pdf.create(html, pdfOptions).toStream((err, stream) => {
    //         if (err) {
    //             console.error('Failed to generate PDF', err);
    //             throw err;
    //         }

    //         // Set response headers for the PDF
    //         res.setHeader('Content-Type', 'application/pdf');
    //         res.setHeader('Content-Disposition', 'attachment; filename=`${invoiceNumber}.pdf`');

    //         // Pipe the PDF stream to the response
    //         console.log(res.data);
    //         stream.pipe(res);

    //     });
    // } catch (error) {
    //     console.error('Failed to retrieve data from MongoDB', error);
    //     throw error;
    // }


};

export default generatePdf;
