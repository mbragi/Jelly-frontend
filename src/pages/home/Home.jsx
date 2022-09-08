import React from 'react';
import NavBar from "../../components/navBar/NavBar";
import intro from "../../assets/intro.mp4";
import features from "../../assets/features.png";
import bike from "../../assets/bike.png";
import turnSignal from "../../assets/turn-signal.png";
import Button from "../../components/button/Button";
import "./Home.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { MdDirectionsBike, MdDirectionsCar, MdDirectionsBus } from "react-icons/md";
function Home() {
  return (
    <div className='container'>

        <NavBar />
        <video controls autostart autoPlay loop src={intro} type="video/mp4" className='intro' />

        <div className='features-div'>

          <img src={features} alt="header" className='features-header' />

          <div className='features-slider-div'>
            <BiChevronLeftCircle size={50} className='icon' />
            <img src={bike} alt="bike" className='slider-item' />
            <BiChevronRightCircle size={50} className='icon' />
          </div>

        </div>


        <div className='transport-cost-div'>
          <h1 className='transport-cost-header'>Transportation Cost Comparison (Monthly)</h1>
          <div className='vehicles'>
            <div className='vehicle'>
              <MdDirectionsBike size={100} className='icon' />
              <p className='description-price'>Description Price</p>
            </div>
            <div className='vehicle'>
              <MdDirectionsCar size={100} className='icon' />
              <p className='description-price'>Description Price</p>
            </div>
            <div className='vehicle'>
              <MdDirectionsBus size={100} className='icon' />
              <p className='description-price'>Description Price</p>
            </div>
          </div>

          <div className='input-range-div'>
            <p className='input-range-title'>Daily Usage 1km (s)</p>
            <input type='range' className='input-range' />
          </div>
        </div>

        <div className='promo'>
          <img src={turnSignal} alt="promo" className='promo-img' />
          <div className='promo-info'>
            <h2 className='promo-header'>Jelly e-indicaator</h2>
            <p className='promo-price'>Buy at: $99</p>
            <p className='promo-desc'>
              Refer friends and get upto Rs. 5000/- OFF on final price Jelly App connected | Removable battery | Ignition key switch with handle lock | BIS Approved Cell | Peddle Assist sensor with multi riding modes
            </p>
            <Button content="Buy Now" style={{}} />
          </div>
        </div>

        <div className='accessories-div'>
          <div className='accessories-header'>
            <p className='accessories-title'>Accessories</p>
            <Button content="View More" style={{}} />
          </div>

          <div className='accessories-slider'>
            
            <BiChevronLeftCircle size={50} className='icon' />

            <div className='accessories-slider-item'>
              <img src={bike} alt="bike" className='accessories-slider-item-image' />
              <Button content="Add to Cart" style={{}} />
            </div>
            
            <div className='accessories-slider-item'>
              <img src={bike} alt="bike" className='accessories-slider-item-image' />
              <Button content="Add to Cart" style={{}} />
            </div>
            
            <div className='accessories-slider-item'>
              <img src={bike} alt="bike" className='accessories-slider-item-image' />
              <Button content="Add to Cart" style={{}} />
            </div>

            <BiChevronRightCircle size={50} className='icon' />

          </div>
        </div>

    </div>
  )
}

export default Home;