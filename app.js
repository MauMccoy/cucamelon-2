var express = require("express");
var app = express();

// set up public directory
app.use(express.static("public"));

// set default engine
app.set("view engine", "ejs");

// ROUTES
app.get("/", function(req, res) {
  res.render("index");
});

// start Server
app.listen(3000, function() {
    console.log("SERVER RUNNING");
});
