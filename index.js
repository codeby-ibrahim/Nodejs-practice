const express = require('express');

const app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})
app.get('/profile', function (req, res) {
    res.send('this is profile page')
})
app.listen(3000);