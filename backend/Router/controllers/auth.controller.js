import dbConnect from "../../database/db_service.js";

const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
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
            res.end('Hello, World!');
        }
    } catch (err) {
        console.log(err);
    }

}

const register = async (req, res) => {
    const data = req.body;
    let db = await dbConnect();
    let dbResponse = db.collection("users").insertOne(data, (err) => {
        if (err) throw err;
        db.close();
        res.json({ dbResponse })
    })

};

const billDetails = async (req, res) => {
    res.end('Hello, World!');
    const data = req.body;
    let db = await dbConnect();
    console.log(data);
    let dbResponse = db.collection("bill_details").insertOne(data, (err) => {
        if (err) throw err;
        db.close();
        res.json({ dbResponse })

    })

};

export { register, signIn, billDetails };
