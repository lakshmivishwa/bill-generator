const express = require('express')
const app = express();
const port = 4000;

app.get("/", (req, res) => {
    res.send("welcome to my home page");
});


app.listen(port, () => {
    console.log(`listening to the port no ${port}`)
})

