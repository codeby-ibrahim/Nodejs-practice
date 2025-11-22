const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/create', async (req, res) => {
    try {
        let createdUser = await userModel.create({
            name: 'ibrahim',
            username: 'ibrahim123',
            email: 'ibrahim123@gmail.com'
        });

        res.send(createdUser);
    } catch (error) {
        res.send(error);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
