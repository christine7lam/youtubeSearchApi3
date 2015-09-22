var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var Application = require('./components/application');
var YoutubePlaylistSearch = require('./components/youtubePlaylistSearch/videoPlaylist');


module.exports = (
    <Route handler={Application} path="/">
        <DefaultRoute name="dashboard" handler={YoutubePlaylistSearch} />

        <Route name="playlistsearch" handler={YoutubePlaylistSearch} path="/playlistsearch" />
        <Route name="artistsearch" handler={YoutubePlaylistSearch} path="/playlistsearch/:artist" />
    </Route>
);