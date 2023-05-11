import dbConnect from "../../database/db_service.js";

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        console.log(req.body)
        if (!email || !password) {
            return res.status(400).json({ error: "Username/ Password is required" })
        }
        let db = await dbConnect();
        let response = await db.collection("users").findOne({ email: email, password: password })
        console.log(response);
        if (!response) {
            res.status(400).json({ error: "Something went wrong, Please try again" })
        } else {
            res.json({ response })
        }
    } catch (err) {
        console.log(err);
    }

}
const register = async (req, res) => {
    const data = req.body;
    console.log(data);
    let db = await dbConnect();

    try {
        let dbResponse = db.collection("users").insertOne(data);
        res.json({ message: 'User Sign up succesfull' });
    } catch (err) {
        db.close();
        throw err;
    }
};

const billdetails = async (req, res) => {
    const data = req.body;

    //Store the data in MongoDB
    let db = await dbConnect();

    try {
        let dbResponse = await db.collection("bill_details").insertOne(data);
        res.json({ message: 'bill data stored' });
    } catch (err) {
        db.close();
        throw err;
    }
    console.log(data);

}


export { register, signIn, billdetails };
