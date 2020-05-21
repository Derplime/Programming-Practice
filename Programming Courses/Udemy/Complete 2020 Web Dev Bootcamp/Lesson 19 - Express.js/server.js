//@ts-check

const express = require("express");

const app = express();

app.get("/", function(req, res) {
    res.send("Hello");
});

app.get("/contact", function(req, res) {
    res.send("Contact me at: emil@derplime.dev");
});

app.get("/about", function(req, res) {
    res.send("Hello, I'm Emil, and I like coding and video games.");
});

app.get("/hobbies", function(req, res) {
    res.send("Video Games, Coding, Eating, Sleeping");
});

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
