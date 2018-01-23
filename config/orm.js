var connection = require("./connection.js");

var orm = 
connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], function(
  err,
  result
) {
  if (err) {
    // If an error occurred, send a generic server faliure
    return res.status(500).end();
  } else if (result.affectedRows === 0) {
    // If no rows were changed, then the ID must not exist, so 404
    return res.status(404).end();
  }
  res.status(200).end();
});



connection.query(
  "UPDATE plans SET plan = ? WHERE id = ?",
  [req.body.plan, req.params.id],
  function(err, result) {
    if (err) {
      // If an error occurred, send a generic server faliure
      return res.status(500).end();
    } else if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  }
);
connection.query("SELECT * FROM plans;", function(err, data) {
  if (err) {
    return res.status(500).end();
  }

  res.json(data);
});
