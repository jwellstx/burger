var connection = require("./connection.js");

var orm = {
    selectAll: (table, cb) => {
        var queryString = "SELECT * FROM " + table + ";";
        console.log(queryString);
        connection.query(queryString, (err, rows) => {
            if (err) throw err;
            cb(rows);
        });
    },
    insertOne: (table, burgerType, cb) => {
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, burgerType, (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
    },
    updateOne: (table, id, cb) => {
        var queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = ?"
        connection.query(queryString, id, (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
    }
}

module.exports = orm;