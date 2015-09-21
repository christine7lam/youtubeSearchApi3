var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var io = require('socket.io-client');

var RouteHandler = Router.RouteHandler;

var Application = React.createClass({
    mixins: [Reflux.ListenerMixin],
    contextTypes: {
        router: React.PropTypes.func
    },
    componentDidMount: function() {

        var currentPath = this.context.router.getCurrentPath();

    },
    render: function() {
        return (
            <div className="app">
                <RouteHandler />
            </div>
        );
    }
});

module.exports = Application;