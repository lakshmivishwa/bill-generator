const express = require('express');
const app = express();
const port = 4000;
// const connection = require("./database/find")
const cors = require('cors');
const dbConnect = require('./database/db_service')
app.use(cors({
    origin: '*'
}));

app.use(express.json())
app.listen(port, () => {
    console.log(`listening to the port no ${port}`)

});

dbConnect();
// console.log(db);


app.use(require('./Router/auth'));
