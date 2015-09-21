/**
 * Created by heipakchristine on 7/28/15.
 */
var url = require('url');

var app = require('../main');
var promise = require('bluebird');
var request = promise.promisifyAll(require('request'));

module.exports = {

    validate: function(data) {

        var DIRECTORY_ENDPOINT = 'http://10.192.243.23:8080/ingestservice/rest/discovery/';

        return request.postAsync(DIRECTORY_ENDPOINT, {
            json: true,
            time: true,
            body: {
                topic: data.topic,
                port: data.port,
                serverName: data.serverName,
                message: data.message,
                qos: data.qos,
                clientId: data.clientId
            }
        });

    }
};
