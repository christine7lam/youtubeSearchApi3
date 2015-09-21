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
        this.listenTo(SearchStore, this._onSearch);
    },
    getVideos: function() {
        var jsonString = {
            q:  this.refs.artist.getDOMNode().value,
            maxResults: "15"
        }

        //load all assets
        PlaylistAction.getVideos(jsonString.q);
    },
    render : function(){
        return (
            <div className="container">
                    testing you tube page
                    <div className="form-group col-md-2">
                        <select className="form-control" id="artist" ref="artist" onChange={this.getVideos}>
                        <option>Select an artist</option>
                        <option>The Script</option>
                        <option>Elton John</option>
                        <option>Stevie Wonder</option>
                        </select>
                    </div>
                </div>
        );
    },
    _onSearch: function(data) {
        alert("passing back"+data.body.results);
    }
});

module.exports = Playlist;