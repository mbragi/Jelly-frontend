import React from 'react';
import './ImageSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider({ images }) {

    const settings = {
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,

    };

    return (
        <div className='slider-container'>
            <Slider {...settings} className='slider'>
                {images.map((item, idx) => (
                    <img src={item} key={idx} alt={item} className='slider-image' />
                ))}
            </Slider>
        </div>
        //         <Fade direction="up" className='slider-attention-seeker'>
        //         </Fade>
    )
}

export default ImageSlider;
