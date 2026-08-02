const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());   // To read JSON data

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

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});