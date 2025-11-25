const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const userModel = require('./Model/user');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/testapp1')
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Set EJS as view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// 1️⃣ Home - Form to create user
app.get('/', (req, res) => {
    res.render('index');
});

// 2️⃣ Read - Show all users
app.get('/read', async (req, res) => {
    try {
        const users = await userModel.find();
        res.render('read', { users });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// 3️⃣ Create - Handle form submission
app.post('/create', async (req, res) => {
    try {
        const { name, email, image } = req.body;
        await userModel.create({ name, email, image });
        res.redirect('/read');
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// 4️⃣ Delete user
app.post('/delete/:id', async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.redirect('/read');
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// 5️⃣ Edit form
app.get('/edit/:id', async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id);
        res.render('edit', { user });
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// 6️⃣ Update user
app.post('/update/:id', async (req, res) => {
    try {
        const { name, email, image } = req.body;
        await userModel.findByIdAndUpdate(req.params.id, { name, email, image });
        res.redirect('/read');
    } catch (err) {
        console.log(err);
        res.status(500).send("Server Error");
    }
});

// Start server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
