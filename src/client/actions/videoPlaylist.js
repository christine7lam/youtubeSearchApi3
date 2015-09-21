/**
 * Created by heipakchristine on 9/20/15.
 */

var Reflux = require('reflux');

module.exports = Reflux.createAction({
    asyncResult: true,
    children: [
        'loadVideos',
        'getVideos'
    ]
});
