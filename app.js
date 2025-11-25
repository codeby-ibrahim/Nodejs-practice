const express = require('express');
const app = express();
const path = require('path');

app.use("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join('__dirnmame', 'public')))
app


app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(3000)