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

app.get('/update', async (req, res) => {
    try {
        const updatedUser = await userModel.findOneAndUpdate(
            { username: "ibrahim123" },
            { name: "Ibrahim Updated" },
            { new: true }
        );

        res.send(updatedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/read', async (req, res) => {
    try {
        const users = await userModel.find();
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/delete', async (req, res) => {
    try {
        const deleteUser = await userModel.findOneAndDelete({
            username: "ibrahim123"
        });

        if (!deleteUser) {
            return res.send("User not found");
        }

        res.send({
            message: "User deleted successfully",
            deleted: deleteUser
        });

    } catch (error) {
        res.status(500).send(error);
    }
});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
