module.exports.listen = function(app) {

    var server = require('http').createServer(app);
    var io = require('socket.io').listen(server);
    //var crypto = require('crypto');

    server.listen(8080);

    io.sockets.on('connection', function (socket) {

        if (socket.request.session == null || socket.request.session.data == null) {
            return;
        }

       // var interval = setInterval(function() {

       //     var sha = crypto.createHash('sha1');

      // }, 60000);

        socket.on('disconnect', function () {
            clearInterval(interval);
        });
    });

    return io;
}