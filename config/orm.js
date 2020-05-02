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
    insertOne: (table, cb) => {
        // query here
        console.log("in insert one");
    },
    updateOne: (table, cb) => {
        // query here
        console.log("inside update one");
    }
}

module.exports = orm;