const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());   // To read JSON data

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

//HTTP methods
let students = [
    {id:1,name:"One"},
    {id:2,name:"Two"}
];

app.get("/students",(req,res)=>{
    res.json(students);
});

app.post("/students",(req,res)=>{
    students.push(req.body);
    res.json({
        message:"Student Added",
        data:students
    });
});
// delete student by id
app.delete("/students/:id",(req,res)=>{
    const id = req.params.id;
    students = students.filter(student => student.id != id);
    res.json({
        message:"Student Deleted",
        data:students
    });
});

//middleware example
const myMiddleware = (req, res, next) => {
    console.log("Middleware executed ",new Date());
    next();
};

app.use(myMiddleware);

//route to check middleware
app.get("/mwtest", (req, res) => {
    res.send("Middleware executed");
});

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Configure EJS
app.set("view engine", "ejs");

// Home Page
app.get("/", (req, res) => {

    res.render("home", {

        college: "Tirumala Engineering College",
        department: "Department of Computer Science",
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