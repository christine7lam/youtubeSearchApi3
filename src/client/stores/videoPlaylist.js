/**
 * Created by heipakchristine on 7/28/15.
 */
var Reflux = require('reflux');
var SearchAction = require('../actions/videoPlaylist');

var request = require('superagent');

const SEARCH_ENDPOINT = '/services/search';

var searchStore = Reflux.createStore({
    init: function() {
        this.listenTo(SearchAction.loadVideos, this._search);

        this.listenTo(SearchAction.completed, this.trigger);
        this.listenTo(SearchAction.failed, this.trigger);

    },
    _search: function(data) {   console.log("in client route: "+data.q);
        request
            .post(SEARCH_ENDPOINT)
            .set('Content-Type', 'application/json')
            .send({
                data: {
                    q: data.q,
                    maxResults: data.maxResults
                }
            })
            .end(function(err, res) {
                if (err == null) {
                    SearchAction.completed(res, data);
                } else {
                    SearchAction.failed(err);
                }
            });
    }
});

module.exports = searchStore;