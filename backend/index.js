const express = require('express');
const app = express();
const port = 4000;
const connection = require("./database/find")

app.use(express.json())
app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})

app.use(require('./Router/auth'));
