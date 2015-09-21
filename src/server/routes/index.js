var app = require('../main');

//routes map
var pages = require('./pages');
var validate = require('./validate');
//var search = require('./search');

module.exports = function(app) {

    //track requests
    app.use(function(req, res, next) {
        app.locals.statsd.increment('youtube.playlist.search.request');
        next();
    });

    app.use('/', pages);
    app.use('/services/validate', validate);
    //app.use('/services/search', search);
}