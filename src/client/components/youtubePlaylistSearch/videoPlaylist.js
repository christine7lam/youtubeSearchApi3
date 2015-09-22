/**
 * Created by heipakchristine on 9/20/15.
 */

var React = require('react');
var Reflux = require('reflux');

//components
var Carousel = require('./videocarousel');

//actions
var PlaylistAction = require('../../actions/videoPlaylist');

//store
var SearchStore = require('../../stores/videoPlaylist');

var Playlist = React.createClass({
    mixins: [Reflux.ListenerMixin],
    getInitialState: function() {
        return {
            videos: [],
            videoJson: null,
            selectedArtist: "The Script"
        }
    },
    componentDidMount: function() {
        this.listenTo(SearchStore, this.onSearch);
        PlaylistAction.getVideos("The Script");
    },
    getVideos: function() {
        var jsonString = {
            q:  this.refs.artist.getDOMNode().value,
            maxResults: "21"
        }

        this.setState({
            selectedArtist: jsonString.q
        });

        PlaylistAction.getVideos(jsonString.q);
    },
    onSearch: function(data) {
        try {
            this.setState({
                videoJson: JSON.parse(data.body.results),
                videos: JSON.parse(data.body.results).items
            });
        }catch(exception){
            console.log('Error while parsing JSON : check json format', 500000);
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
                <br />
                    <div className="container">
                        <div className="form-group col-md-2">
                            <select className="form-control" id="artist" ref="artist" onChange={this.getVideos}>
                            <option>The Script</option>
                            <option>Elton John</option>
                            <option>Stevie Wonder</option>
                            <option>Frank Sinatra</option>
                            <option>Louis Armstrong</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-12 col-md-centered text-center">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <span><h5>Videos by</h5> <h3>{this.state.selectedArtist}</h3></span>
                            </div>
                            <div className="panel-body">
                                 <div className="panel">
                                    <Carousel videos={this.state.videos} />
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="navbar navbar-default navbar-fixed-bottom" role="navigation">
                    <div className="navbar-text pull-right">Yahoo Interview Challenge - Christine Hei Pak Lam</div>
                </div>
            </div>
        );
    }
});

module.exports = Playlist;