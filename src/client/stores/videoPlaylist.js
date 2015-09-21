/**
 * Created by heipakchristine on 7/28/15.
 */
var Reflux = require('reflux');
var PlaylistAction = require('../actions/videoPlaylist');

var request = require('superagent');

const SEARCH_ENDPOINT = '/services/search';

var searchStore = Reflux.createStore({
    init: function() {
        this.listenTo(PlaylistAction.loadVideos, this._search);

        this.listenTo(PlaylistAction.completed, this.trigger);
        this.listenTo(PlaylistAction.failed, this.trigger);

    },
    _search: function(data) {
        request
            .get(SEARCH_ENDPOINT)
            .set('Content-Type', 'application/json')
            .accept('application/json')
            .end(function(err, res) {
                if (err == null) {
                    PlaylistAction.completed(res);
                } else {
                    PlaylistAction.failed(res);
                }
            });
    }
});

module.exports = searchStore;