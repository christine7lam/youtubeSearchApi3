/**
 * Created by heipakchristine on 9/20/15.
 */

var React = require('react');
var Reflux = require('reflux');

//actions
var PlaylistAction = require('../../actions/videoPlaylist');

//store
var SearchStore = require('../../stores/videoPlaylist');

var Playlist = React.createClass({
    mixins: [Reflux.ListenerMixin],
    getInitialState: function() {
        return {
            videos: []
        }
    },
    componentDidMount: function() {
        this.listenTo(SearchStore, this.onStoreUpdate);

        //load all assets
        PlaylistAction.loadVideos();
    },
    onStoreUpdate: function(data) {

        //normalize asset status on store update
        if (videos.length > 0) {
            videos.forEach(function(video, index) {
                alert(video);
            });
        } else {
             videos = [];
        }
    },
    render : function(){
        return (
            <div className="container">
                    testing you tube page
                </div>
        );
    }
});

module.exports = Playlist;