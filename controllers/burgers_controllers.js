var express = require("express");
var burgerOrm = require("../models/burgers.js")
var path = require("path");
var router = express.Router();



router.get("/", function(req, res) {
  burgerOrm.all(function(data) {
    var burger = {
      burgerOrm: data
    };
    console.log(burger);
    res.render("index", burger);
  });
});

router.post("/api/burgers", function(req, res) {
  burgerOrm.add(req.body.burger_name, req.body.devoured
  , function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});


module.exports = router;