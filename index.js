const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Homework 73");
});

app.get('/:text', (req, res) => {
    res.send(req.params.text);
});

app.listen(port, () => {
    console.log('Server online on ' + port);
});