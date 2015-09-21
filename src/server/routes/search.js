/**
 * Created by heipakchristine on 7/28/15.
 */
var app = require('../main');
var express = require('express');
var promise = require('bluebird');

var router = express.Router();


router.post('/', function(req, res) {
    console.log("more stuff sinetubg"+req.body.data.q);
    res.send('im the homedafsag page!');

});

module.exports = router;