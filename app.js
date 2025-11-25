// const express = require('express');
// const app = express();
// const path = require('path');

// app.use("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join('__dirnmame', 'public')))
// app


// app.get('/', (req, res) => {
//     res.render('hello.ejs');

// })
// app.listen(3000)



const express = require('express');
const app = express();
const path = require('path');

// Set view engine correctly
app.set("view engine", "ejs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correct static folder path (__dirname was wrong)
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
    res.render('index');   // No need for .ejs
});
app.get('/read', (req, res) => {
    res.render('read');   // No need for .ejs
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
