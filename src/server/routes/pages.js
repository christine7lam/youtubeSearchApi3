var app = require('../main');
var express = require('express');
var router = express.Router();

router.get(
    ['/', '/validation', '/playlistsearch'
    ],
    function(req, res) {
        res.render('index', { title: 'You Tube Search API 3 DEMO' });
    }
);

module.exports = router;