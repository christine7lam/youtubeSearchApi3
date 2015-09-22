/**
 * Created by heipakchristine on 9/20/15.
 */

var React = require('react');
var Reflux = require('reflux');

//components
var Carousel = require('./videocarousel');

//actions
var PlaylistAction = require('../../actions/videoPlaylist');
var MessagingActions = require('../../actions/messaging');

//store
var SearchStore = require('../../stores/videoPlaylist');

var Playlist = React.createClass({
    mixins: [Reflux.ListenerMixin],
    getInitialState: function() {
        return {
            videos: [],
            videoJson: null
        }
    },
    componentDidMount: function() {
        this.listenTo(SearchStore, this.onSearch);
    },
    getVideos: function() {
        var jsonString = {
            q:  this.refs.artist.getDOMNode().value,
            maxResults: "15"
        }

        PlaylistAction.getVideos(jsonString.q);
    },
    onSearch: function(data) {
        try {
            this.setState({
                videoJson: JSON.parse(data.body.results),
                videos: JSON.parse(data.body.results).items
            });
        }catch(exception){
            MessagingActions.alert('Error while parsing JSON : check json format', 500000);
        }
    },
    render : function(){
        var videoList = [];
        this.state.videos.forEach(function (video, index) {
                videoList.push(
                    <li>{video.snippet.title}</li>
                );
        });

        return (
            <div className="container">
                    <div className="container">
                        <div className="form-group col-md-2">
                            <select className="form-control" id="artist" ref="artist" onChange={this.getVideos}>
                            <option>Select an artist</option>
                            <option>The Script</option>
                            <option>Elton John</option>
                            <option>Stevie Wonder</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-centered text-center">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3>Music Videos</h3>
                            </div>
                            <div className="panel-body">
                                 <div className="panel">
                                    {videoList}
                                    <Carousel />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
});

module.exports = Playlist;