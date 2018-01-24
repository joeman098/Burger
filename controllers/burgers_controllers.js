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

router.put("/api/burgers/:id", function(req, res) {
 console.log("THIS" + req.params.id)
  burgerOrm.eat(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;