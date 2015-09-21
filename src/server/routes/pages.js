var app = require('../main');
var express = require('express');
var router = express.Router();

router.get(
    ['/', '/validation'
    ],
    function(req, res) {
        res.render('index', { title: 'Device Manager' });
    }
);

module.exports = router;