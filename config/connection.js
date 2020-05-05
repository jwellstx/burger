var mysql = require("mysql");

var connection = mysql.createPool({
        host: "localhost",
        user: "root",
        password: "password",
        port: 3306,
        database: "burgers_db"
    });

// connection.connect(err => {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
// });

module.exports = connection;