/**
 * Created by heipakchristine on 9/21/15.
 */

var url = require('url');

var app = require('../main');
var promise = require('bluebird');
var request = promise.promisifyAll(require('request'));

module.exports = {

    search: function(data) {

        var SEARCH_ENDPOINT = 'https://www.googleapis.com/youtube/v3/search';

        return request.getAsync(SEARCH_ENDPOINT, {
            json: true,
            time: true,
            body: {
                part: "snippet",
                type: "video",
                q: "The Script",
                maxResults: 15,
                order: "title",
                publishedAfter: "2015-02-14T00:00:00Z"
            }
        });
    }
};

