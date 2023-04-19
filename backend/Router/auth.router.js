const { Router, response } = require('express');
const express = require('express')
const router = express.Router();
// const dbConnect = require('../database/db_service');
const { signIn, register } = require('./controllers/auth.controller');

router.post("/login", signIn);

router.post("/register", register)

module.exports = router;
