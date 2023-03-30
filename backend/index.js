const express = require('express')
const app = express();
const port = 4000;
app.use(express.json());
require('dotenv').config();
const dbConnect = require('./database/db_service')

console.log(dbConnect);
const mongoString = process.env.DATABASE_URL

app.use(require('./Router/auth'));

app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})


