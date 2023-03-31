const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const port = 4000;
app.use(express.json());
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
console.log(mongoString);

mongoose.connect(mongoString);
const database = mongoose.connection

console.log(mongoose);

// const dbConnect = require('./database/db_service')
// console.log(dbConnect);
// let database= dbConnect();
// console.log(database);





// console.log(mongoString);
app.use(require('./Router/auth'));


