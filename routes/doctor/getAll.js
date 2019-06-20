var express = require('express');
var router = express.Router();
const Doctor = require("../../models/doctor");
router.get('/', function (req, res, next) {
    Doctor.findAll({
    }).then(items => {
        res.json(items[0]);
    })
});

module.exports = router;