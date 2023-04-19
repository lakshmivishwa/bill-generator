
export const signIn = async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please fill the data" })
        }
        let db = await dbConnect();
        let response = await db.collection("users").findOne({ email: email, password: password })
        console.log(response);
        if (!response) {
            res.status(400).json({ error: "user error" })
        } else {
            // res.json({ message: "logged in successful" })
            res.json({ response })
        }
    } catch (err) {
        console.log(err);
    }

}


export const register = async (req, res) => {
    const data = req.body;
    let db = await dbConnect();
    let dbResponse = db.collection("users").insertOne(data, (err, dbRes) => {
        if (err) throw err;
        res.json({ dbResponse })
        db.close();
    })

};