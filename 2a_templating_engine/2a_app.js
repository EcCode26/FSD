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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});