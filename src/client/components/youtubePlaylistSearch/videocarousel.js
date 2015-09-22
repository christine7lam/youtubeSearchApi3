/**
 * Created by heipakchristine on 9/21/15.
 */
var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
    render: function () {
        var slides = [];
        var prettyDate = null;
        this.props.videos.forEach(function(video, index){
                var cleanDate = video.snippet.publishedAt.split("T");
                var prettyDate = cleanDate[0].replace(/-/g, " ");
            if(index >0){
            slides.push(
                <div>
                    <br />
                    <center>
                        <img src={video.snippet.thumbnails.medium.url} width="196" height="110"></img>
                    </center>
                    <br />
                    <h4>{video.snippet.title}</h4>
                    <h8>by </h8>
                    <h6>{video.snippet.channelTitle}</h6>
                    <h8>published</h8><br />
                    <h6>{prettyDate}</h6>
                    </div>
                );
            }
        });
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        return (
            <Slider {...settings}>
                {slides}
         </Slider>
        );
    }
});
module.exports = SimpleSlider;