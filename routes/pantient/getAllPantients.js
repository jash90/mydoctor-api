var express = require('express');
var router = express.Router();
const { Pantient } = require("../../models");
router.get('/', function (req, res, next) {
    Pantient.findAll({
    }).then(items => {
        res.json(items);
    })
});
module.exports = router;