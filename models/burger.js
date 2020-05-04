var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (burgerType, cb) => {
        orm.insertOne("burgers", burgerType, (res) => {
            cb(res)
        });
    },
    updateOne: (id, cb) => {
        orm.updateOne("burgers", id, (res) => {
            cb(res)
        });
    }
};

module.exports = burger;