var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-east-06.cleardb.net",
    user: "bc84bda8ba6e91",
    password: "d7b4e1b6",
    port: 3306,
    database: "heroku_1572b092a276c3e"
});

connection.connect(err => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;