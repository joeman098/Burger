var express = require("express");
var burgerOrm = require("../models/burgers.js")
var path = require("path");

function html(app) {

    app.use(express.static(path.join(__dirname,"public")));

    app.get("/", function(req, res) {
        console.log("lol");
        burgerOrm.show();
        
          res.render("../views/index", { burgers: data });
        });
    


    
}
module.exports = html ;