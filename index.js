const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { log } = require("console");


// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // VERY IMPORTANT

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correct static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    fs.readdir('./files', function (error, files) {
        res.render("index" , {files: files});;
    })
});

app.listen(3000, () => {
    console.log("Server running");
});
