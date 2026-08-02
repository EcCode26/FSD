const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());   // To read JSON data

//simple route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//student route
app.get("/student", (req, res) => {
    res.send("Student Page");
});

//teacher route
app.get("/teacher", (req, res) => {
    res.send("Teacher Page");
});

//student route with parameter
app.get("/student/:id", (req, res) => {
    const id = req.params.id;
    res.send("Student ID = " + id);
});


//search route with query parameter for name and branch
app.get("/search", (req, res) => {
    const name = req.query.name;
    const branch = req.query.branch;
    res.send("Search Name = " + name + ", Branch = " + branch);
});

//example of url building with parameter and query parameter
app.get("/student/:id/search", (req, res) => {
    const id = req.params.id; 
    const bookname = req.query.bookname;
    res.send("Student ID = " + id + ", Searching for the Book   = " + bookname);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});