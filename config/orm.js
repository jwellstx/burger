var connection = require("./connection.js");


var orm = {
    selectAll: (table, cb) => {
        orm.checkConnection();  // because we are losing connection on heroku

        // query here
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, rows) => {
            if (err) throw err;
            cb(rows);
        });
    },
    insertOne: (table, burgerType, cb) => {
        orm.checkConnection();  // because we are losing connection on heroku

        // query here
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?, 0)";
        connection.query(queryString, burgerType, (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
    },
    updateOne: (table, id, cb) => {
        orm.checkConnection();  // because we are losing connection on heroku

        // query here
        var queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = ?"
        connection.query(queryString, id, (err, rows) => {
            if (err) throw err;
            cb(rows);
        })
    },
    checkConnection: () => {
        console.log(connection.state);
        if(connection.state === 'disconnected') {
            connection.connect(err => {
                if (err) throw "Connection to database failed with err: " + err;
                console.log("connected as id " + connection.threadId);
            });
        }
    }
}

module.exports = orm;