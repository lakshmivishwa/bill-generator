const { Router, response } = require('express');
const express = require('express')
const router = express.Router();
const dbConnect = require('../database/db_service')
console.log(dbConnect);
const { MongoClient } = require('mongodb');
router.get("/", (req, res) => {
    res.send("welcome to my router page");
});
router.get("/create", (req, res) => {
    res.send("welcome to my create page");
});


router.post("/register", async (req, res) => {
    const signUpData = req.body;
    res.json({ message: req.body })
    console.log(req.body);
    let db = await dbConnect();
    let collection = db.collection("signUpData").insertOne(req.body, (err, res) => {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    })

})


module.exports = router;
