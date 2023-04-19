const { Router, response } = require('express');
const express = require('express')
const router = express.Router();
const dbConnect = require('../database/db_service')

router.get("/", (req, res) => {
    res.send("welcome to my router page");
});
router.get("/create", (req, res) => {
    res.send("welcome to my create page");
});

router.post("/login", async (req, res) => {

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please fill the data" })
        }
        let db = await dbConnect();
        console.log(db);
        let collection = await db.collection("signUpData").findOne({ email: email, password: password })
        console.log(collection);
        if (!collection) {
            res.status(400).json({ error: "user error" })
        } else {
            // res.json({ message: "logged in successful" })
            res.json({ collection })
        }
    } catch (err) {
        console.log(err);
    }


});

router.post("/register", async (req, res) => {
    const signUpData = req.body;
    res.json({ message: req.body })
    console.log(req.body);
    let db = await dbConnect();
    let collection = db.collection("signUpData").insertOne(req.body, (err, res) => {
        if (err) throw err;
        res.json({ collection })
        db.close();
    })

})


module.exports = router;
