const express = require("express");
const app = express();
const PORT = 3000;

//middleware example
const myMiddleware = (req, res, next) => {
    console.log("Middleware executed ",new Date());
    next();
};

app.use(myMiddleware);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

//route to check middleware
app.get("/test", (req, res) => {
    res.send("Middleware test executed");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});