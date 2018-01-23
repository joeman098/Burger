var orm = require("../config/orm.js")


var burgerOrm = {
    eat: function (id) {
        orm.devour(id);
    },
    add: function (name) {
        orm.addNew(name)
    },
    show: function () {
        orm.showAll
        
    },

}

module.exports = burgerOrm;