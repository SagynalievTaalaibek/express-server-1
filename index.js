const express = require('express');
const { Vigenere } = require('caesar-salad').Vigenere;
const password = 'password';
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Homework 73");
});

app.get('/:text', (req, res) => {
    res.send(req.params.text);
});

app.get('/encode/:password', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.password));
});

app.get('/decode/:password', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.password));
});

app.listen(port, () => {
    console.log('Server online on ' + port);
});