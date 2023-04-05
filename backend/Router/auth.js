const { Router } = require('express');
const express = require('express')
const router = express.Router();
const dbConnect = require('../database/db_service')
console.log(dbConnect);

router.get("/", (req, res) => {
    res.send("welcome to my router page");
});
router.get("/create", (req, res) => {
    res.send("welcome to my create page");
});

router.post("/register", (req, res) => {
    console.log(req);
    console.log(req.body)
    // res.send("running");
    res.json({ message: req.body })
})

module.exports = router;
