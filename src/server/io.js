module.exports.listen = function(app) {

    var server = require('http').createServer(app);
    var io = require('socket.io').listen(server);
    //var crypto = require('crypto');

    server.listen(8080);

    io.sockets.on('connection', function (socket) {

        socket.on('disconnect', function () {
            clearInterval(interval);
        });
    });

    return io;
}