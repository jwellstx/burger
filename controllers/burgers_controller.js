var express = require('express');
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", (req, res) => {
    burger.selectAll(data => {  // this is the callback function
        var allBurgers = {
            burgers: data
        };
        res.render("index", allBurgers);  // render page
    });
});

router.post("/:id", (req, res) => {
    burger.updateOne(req.params.id, function (result) {
        res.redirect("/");
    })
});

router.post("/", (req, res) => {
    if (req.body.name === "") {  // if empty string
        res.redirect("/");
    }
    else {
        burger.insertOne(req.body.name, function (result) {
            res.redirect("/");
        });
    }
});

module.exports = router;