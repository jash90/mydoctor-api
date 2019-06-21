var express = require('express');
var router = express.Router();
const { Doctor } = require("../models");
const faker = require('faker');
router.get('/', function (req, res, next) {
    faker.locale = "pl";
    res.json(faker.date.past())
});

module.exports = router;