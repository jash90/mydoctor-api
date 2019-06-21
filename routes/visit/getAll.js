var express = require('express');
var router = express.Router();
const { Visit } = require("../../models");
router.get('/:id', function (req, res, next) {
    Visit.findAll({
        limit: 100,
        offset: req.params.id * 100
    }).then(items => {
        res.json(items);
    })
});
router.get('/', function (req, res, next) {
    Visit.findAll({
        limit:100
    }).then(items => {
        res.json(items);
    })
});

module.exports = router;