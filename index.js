const express = require("express");
const app = express();
const path = require("path");

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // VERY IMPORTANT

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Correct static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index"); // Must match index.ejs
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
