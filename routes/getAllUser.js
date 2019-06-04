var express = require('express');
var router = express.Router();
const Visit = require("../models/visit");
const Doctor = require("../models/doctor");
const pantient = require("../models/pantient");
router.get('/', function (req, res, next) {
    Visit.findAll({
 
    }).then(users => {
        res.json(users);
    })
});

module.exports = router;