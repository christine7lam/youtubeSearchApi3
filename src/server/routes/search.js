/**
 * Created by heipakchristine on 9/20/15.
 */
var app = require('../main');
var express = require('express');
var promise = require('bluebird');

var router = express.Router();

//promises
var request = promise.promisifyAll(require('request'));

//data service
var service = require('../services/search');

router.get('/', function(req, res) {

    if (typeof req.session.data.token === 'undefined') {
        return res.status(401).end();
    }

    try {

        service.search(req.session.data.token).spread(function(response) {

            if (response.statusCode === 200) {
                return res.status(200).json({
                    success: true,
                    assets: response.body
                });
            }

            return res.status(response.statusCode).end();

        }, function(error, response) {

            return res.status(500).end();

        });

    } catch(e) {
        return res.status(500).json({
            error: e,
            message: 'There was a problem processing your request, please try again shortly'
        });
    }
});
