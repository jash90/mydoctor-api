var express = require('express');
var router = express.Router();
const { Schedule } = require("../../models");
router.get('/', function (req, res, next) {
    Schedule.findAll({
    }).then(items => {
        res.json(items);
    })
});

module.exports = router;