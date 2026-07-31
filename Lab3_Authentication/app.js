const express = require("express");
const session = require("express-session");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "mysecretkey",
    resave: false,
    saveUninitialized: false
}));

// View Engine
app.set("view engine", "ejs");

// --------------------
// Login Page
// --------------------
app.get("/", (req, res) => {
    res.render("login", {
        error: ""
    });
});

// --------------------
// Login Validation
// --------------------
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "123") {
        // Store username in Session
        req.session.user = username;
        res.redirect("/home");
    }
    else {
        res.render("login", {
            error: "Invalid Username or Password"
        });
    }
});

// --------------------
// Protected Home Page
// --------------------
app.get("/home", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/");
    }

    console.log(req.session);
    res.render("home", {
        username: req.session.user
    });
});

// --------------------
// Logout
// --------------------
app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.send("Error while logging out");
        }
        res.clearCookie("connect.sid");
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});