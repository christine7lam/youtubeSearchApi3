var app = require('../main');

//routes map
var pages = require('./pages');
var search = require('./search');

module.exports = function(app) {

    //track requests
    app.use(function(req, res, next) {
        app.locals.statsd.increment('yahoo.youtube.videos.requests');
        next();
    });

    app.use('/', pages);
    app.use('/services/search', search);
}