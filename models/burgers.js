var orm = require("../config/orm.js")


var burgerOrm = {
    eat: function (id) {
        orm.devour(id);
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
