var express = require('express');
var router = express.Router();
const { Visit } = require("../../models");
router.get('/', function (req, res, next) {
    Visit.findAll({
    }).then(items => {
        res.json(items);
    })
});

module.exports = router;