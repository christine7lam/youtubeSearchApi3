/**
 * Created by heipakchristine on 7/28/15.
 */
var Reflux = require('reflux');
var SearchAction = require('../actions/videoPlaylist');

var request = require('superagent');

const SEARCH_ENDPOINT = '/services/search';

var searchStore = Reflux.createStore({
    init: function() {
        this.listenTo(SearchAction.getVideos, this._getVideos);

        this.listenTo(SearchAction.completed, this.trigger);
        this.listenTo(SearchAction.failed, this.trigger);

    },
    _getVideos: function(artist) {  console.log("**********"+artist);
        request
            .get(SEARCH_ENDPOINT + '/' + artist)
            .set('Content-Type', 'application/json')
            .accept('application/json')
            .end(function(err, res) {
                if (err == null) {
                    SearchAction.completed(res);
                } else {
                    SearchAction.failed(err);
                }
            });
    }

});

module.exports = searchStore;