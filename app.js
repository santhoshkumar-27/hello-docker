
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("welcome to my awesome app!");
});

app.listen(3000, function () {
    console.log("hello world without docker")
})