var connection = require("./connection");


var orm = {
    selectAll: (table, cb) => {
        // query here
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, rows) => {
            if (err) throw err;
            cb(rows);
        });
    },
    insertOne: (table, burgerType, cb) => {
        // query here
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, burgerType, (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
        console.log("in insert one");
    },
    updateOne: (table, id, cb) => {
        // query here
        var queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = ?"
        connection.query(queryString, id, (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
        console.log("inside update one");
    }
}

module.exports = orm;