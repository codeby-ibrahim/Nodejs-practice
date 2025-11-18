const express = require('express');
const app = express();

app.get('/', (req, res){
    res.send('Wellcome to the Home page');
})
