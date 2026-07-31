const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");

// Middleware
app.use(cookieParser());

app.use(session({
    // Secret key used to sign and verify the session cookie
    secret: "mysecretkey",

    // Don't save the session again if nothing changed
    resave: false,

    // Create a new session and cookie on the first request
    // (used here to make the demo easy to observe)
    saveUninitialized: false
}));

// Home Page
app.get("/", (req, res) => {
    //console.log(req.session);
    //res.send("Hello");    
    
    // Session Counter
    if (!req.session.count) {
        req.session.count = 1;
    } else {
        req.session.count++;
    }
    console.log(req.session);
    res.render("home", {
        count: req.session.count,
        cookies: req.cookies,
        session: req.session
    });
});

// Destroy Session
app.get("/destroy", (req, res) => {
    req.session.destroy(() => {
        res.clearCookie("connect.sid");
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});