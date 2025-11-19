const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

// Settings
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware for parsing form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// GET / -> show form (and list files if exists)
app.get("/", (req, res) => {
    fs.readdir(path.join(__dirname, "files"), (err, files) => {
        // if files folder doesn't exist, pass empty array
        const fileList = err ? [] : files;
        res.render("index", { files: fileList });
    });
});

// POST /submit -> handle form submission
app.post("/submit", (req, res) => {
    // Access submitted fields via req.body
    const { name, email, message } = req.body;
    console.log("Form Data:", { name, email, message });

    // Example: save each submission as a timestamped JSON file (optional)
    const saveObj = { name, email, message, time: new Date().toISOString() };
    const filename = path.join(__dirname, "files", `${Date.now()}.json`);

    fs.writeFile(filename, JSON.stringify(saveObj, null, 2), (err) => {
        if (err) {
            console.error("Error saving file:", err);
            return res.status(500).send("Server error saving data");
        }
        // send response or redirect back to form
        res.send("Form submitted successfully!");
        // or: res.redirect("/");
    });
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
