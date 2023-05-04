// const express = require('express');
import express from 'express';
const app = express();
const port = 4000;
import cors from "cors"
import dbConnect from './database/db_service.js';
import router from './Router/auth.router.js';
// const dbConnect = require('./database/db_service')

app.use(cors({
    origin: '*'
}));

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)

});

// dbConnect();


app.use(router);
