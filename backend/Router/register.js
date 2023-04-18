// const { Router, response } = require('express');
// const express = require('express')
// const router = express.Router();
// const dbConnect = require('../database/db_service')

// const registerData = async ( req, res) => {
//     const signUpData = req.body;
//     res.json({ message: req.body })
//     console.log(req.body);
//     let db = await dbConnect();
//     let collection = db.collection("signUpData").insertOne(req.body, (err, res) => {
//         if (err) throw err;
//         res.json({ collection })
//         db.close();
//     })
// }


// export default registerData;

