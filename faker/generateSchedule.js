var express = require('express');
var router = express.Router();
const { Doctor } = require("../models");
const faker = require('faker');
router.get('/', function (req, res, next) {
    faker.locale = "pl";
    Doctor.findAll().then(doctors=>{
        res.json(doctors);
    })
});

module.exports = router;