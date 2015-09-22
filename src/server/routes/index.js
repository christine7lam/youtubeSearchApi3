var app = require('../main');

//routes map
var pages = require('./pages');
var search = require('./search');

module.exports = function(app) {

    app.use('/', pages);
    app.use('/services/search', search);
}