var app = require('../main');
var express = require('express');
var router = express.Router();

router.get(
    ['/', '/validation','/playlistsearch', '/playlistsearch/*'
    ],
    function(req, res) {
        res.render('index', { title: 'Device Manager' });
    }
);

module.exports = router;