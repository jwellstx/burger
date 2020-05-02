var express = require('express');
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(data => {  // this is the callback function
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    });
});

// select one
// update one

module.exports = router;