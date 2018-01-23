var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var methodOverride = require("method-override")
var app = express();
var html = require("./controllers/burgers_controllers.js");
var sqlConnect = require("./config/connection.js")

var PORT = process.env.PORT || 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
sqlConnect();
html(app);

app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
    });