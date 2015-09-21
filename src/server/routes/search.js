/**
 * Created by heipakchristine on 7/28/15.
 */
var app = require('../main');
var express = require('express');
var promise = require('bluebird');

var router = express.Router();
var YouTube = require('youtube-node');

var youTube = new YouTube();

youTube.setKey('AIzaSyDnuvcIHmHC9YrlllvU3YS8dQjq4QGCnpI');





router.post('/', function(req, res) {
    console.log("more stuff sinetubg"+req.body.data.q);
    res.send('im the homedafsag page!');
    youTube.search(req.body.data.q, 2, function(error, result) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(JSON.stringify(result, null, 2));
        }
    });

});


module.exports = router;