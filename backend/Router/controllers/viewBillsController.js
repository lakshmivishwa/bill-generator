import dbConnect from "../../database/db_service.js";

const viewBills = async (req, res) => {

    let db = await dbConnect();
    try {
        const collection = db.collection('bill_details');
        const data = await collection.find().toArray();
        // client.close();
        res.json(data);
    } catch (err) {
        console.log(err);
    }

}


export { viewBills };