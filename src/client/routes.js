var React = require('react');
var { Route, DefaultRoute } = require('react-router');

var Application = require('./components/application');
var Validation = require('./components/validations/dmvalidator');
var YoutubePlaylistSearch = require('./components/youtubePlaylistSearch/videoPlaylist');



module.exports = (
    <Route handler={Application} path="/">
        <DefaultRoute name="dashboard" handler={Validation} />

        <Route name="validation" handler={Validation} path="/validation" />
        <Route name="playlistsearch" handler={YoutubePlaylistSearch} path="/playlistsearch" />

    </Route>
);