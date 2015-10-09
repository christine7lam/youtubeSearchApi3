var app = require('../main');
var express = require('express');
var router = express.Router();

router.get(
    ['/', '/playlistsearch', '/playlistsearch/*'
    ],
    function(req, res) {
        res.render('index', { title: 'Christine Hei Pak Lam' });
    }
);

module.exports = router;