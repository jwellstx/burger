var connection = require("./connection.js");


var orm = {
    selectAll: (table, cb) => {
        // query here
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, rows) => {
            if (err) this.reconnect();  // because we are losing connection on heroku
            cb(rows);
        });
    },
    insertOne: (table, burgerType, cb) => {
        // query here
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, burgerType, (err, rows) => {
            if (err) this.reconnect();  // because we are losing connection on heroku
            cb(rows);
        })
    },
    updateOne: (table, id, cb) => {
        // query here
        var queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = ?"
        connection.query(queryString, id, (err, rows) => {
            if (err) this.reconnect();  // because we are losing connection on heroku
            cb(rows);
        })
    },
    reconnect: () => {
        try {
            connection.connect(err => {
                if (err) throw "Connection to database failed with err: " + err;
                console.log("connected as id " + connection.threadId);
            });
        }
        catch(error) {
            throw "Connect to database could not be established!!";
        }
    }
}

module.exports = orm;