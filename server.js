var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var methodOverride = require("method-override")
var app = express();
var sqlConnect = require("./config/connection.js")

var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controllers.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
    });