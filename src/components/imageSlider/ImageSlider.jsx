import React from 'react';
import './ImageSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImageSlider({ images }) {

    const settings = {
        infinite: true,
        dots: true,
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
                    <img src={item} alt={item} s className='slider-image' />
                ))}
            </Slider>
        </div>
    )
}

export default ImageSlider;
