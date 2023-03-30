const { Router } = require('express');
const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {
    res.send("welcome to my router page");

});
router.get("/create", (req, res) => {
    res.send("welcome to my create page");
});

module.exports = router;
