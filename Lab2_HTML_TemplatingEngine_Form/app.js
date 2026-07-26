const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Configure EJS
app.set("view engine", "ejs");

// Home Page
app.get("/", (req, res) => {
    res.render("home", {
        college: "Engineering College",
        department: "Computer Science Department",
        subject: "MERN Full Stack Development"
    });
});

// Open Registration Form
app.get("/register", (req, res) => {
    res.render("form");
});

// Receive Form Data
app.post("/register", (req, res) => {
    res.render("result", {
        student: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});