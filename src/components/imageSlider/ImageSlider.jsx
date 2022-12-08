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
                {images.map((item, idx) => {
                    return (
                        <img src={item} alt={item} s className='slider-image' />
                    )
                })}
            </Slider>
        </div>
    )
}

export default ImageSlider;


// import React, { Component } from 'react';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


//             <Carousel>
//                 <div>
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//             </Carousel>
