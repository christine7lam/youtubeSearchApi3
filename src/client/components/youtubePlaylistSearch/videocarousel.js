/**
 * Created by heipakchristine on 9/21/15.
 */
var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({

    render: function () {
        var slides = [];
        this.props.videos.forEach(function(video, index){
            if(index >0){
            slides.push(
                <div><center><img src={video.snippet.thumbnails.medium.url} width="196" height="110"></img></center>
                    <h4>{video.snippet.title}</h4>
                    by <h5>{video.snippet.channelTitle}</h5>
                    published <h6>{video.snippet.publishedAt}</h6>
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