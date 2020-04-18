var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/tables", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
  });
  app.get("/reserve", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  app.post("/api/reserve", function(req, res){
      var newReservation = req.body;
      newReservation.routeName = req.body;
      newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  })

  var reserve = [];
  var table = [];

  app.listen(PORT, function()
  {console.log("Listening")});
