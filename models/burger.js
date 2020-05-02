var orm = require("../config/orm.js");

var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    insertOne: (cb) => {
        orm.insertOne("burgers", (res) => {
            cb(res)
        });
    },
    updateOne: (cb) => {
        orm.updateOne("burgers", (res) => {
            cb(res)
        });
    }
};

module.exports = burger;