var orm = require("../config/orm.js")


var burgerOrm = {
    eat: function (id, cb) {
        orm.devour(id, function (res) {
           cb(res) ;
        });
    },
    add: function (name, devoured, cb,) {
        orm.addNew(name,devoured, function (res) {
            cb(res);
        });

    },
    all: function(cb) {
        orm.all(function(res) {
          cb(res);
        });
      },

}

module.exports = burgerOrm;
