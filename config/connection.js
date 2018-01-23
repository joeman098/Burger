var mysql = require("mysql");

function sql() {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "something",
    database: "burgers_db"
  });

  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

    console.log("connected as id " + connection.threadId);
  });
}

module.exports = sql;
