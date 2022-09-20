import React, { useState } from 'react';
import NavBar from "../../components/navBar/NavBar";
import intro from "../../assets/intro.mp4";
import features from "../../assets/features.png";
import bike from "../../assets/51.png";
import turnSignal from "../../assets/turn-signal.jpg";
import Button from "../../components/button/Button";
import Footer from '../../components/footer/Footer';
import "./Home.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { MdDirectionsBike, MdDirectionsCar, MdDirectionsBus, MdOutlineStar } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";
function Home() {
  const [featuresIndex, setFeaturesIndex] = useState(0);
  const featuresArray = ["51.png", "bike.jpg"]
  const prev = () => {
    setFeaturesIndex(featuresIndex => {
      if (featuresIndex === 0) return featuresArray.length - 1;
      return featuresIndex - 1;
    })
  }
  const next = () => {
    setFeaturesIndex(featuresIndex => {
      if (featuresIndex === (featuresArray.length - 1)) return 0;
      return featuresIndex + 1;
    })
  }
  return (
    <div className='container'>

      <NavBar currentPage="home" />
      <video controls autostart autoPlay loop src={intro} type="video/mp4" className='intro' />

      <div className='features-div'>

          <img src={features} alt="header" className='features-header' />

          <div className='features-slider-div'>
            <BiChevronLeftCircle size={50} className='icon' onClick={() => {prev()}}/>
            <Fade direction="up" spy={featuresIndex} className='slider-attention-seeker'>
              <img src={require(`../../assets/${featuresArray[featuresIndex]}`)} alt="bike" className='slider-item' />
            </Fade>
            <BiChevronRightCircle size={50} className='icon' onClick={() => {next()}}/>
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
          <Fade direction="up" spy={featuresIndex} className='promo-attention-seeker'>
            <img src={turnSignal} alt="promo" className='promo-img' />
          </Fade>
          <div className='promo-info'>
            <h2 className='promo-header'>Jelly e-indicaator</h2>


          <div className='ratings'>
            <MdOutlineStar size={20} color="yellow" />
            <MdOutlineStar size={20} color="yellow" />
            <MdOutlineStar size={20} color="yellow" />
            <MdOutlineStar size={20} color="yellow" />
            <MdOutlineStar size={20} color="yellow" />
            <p className='number-of-ratings'>(20)</p>
          </div>

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
          <Button content="View More" style={{ width: "20%", height: "15%", fontSize: "100%" }} />
        </div>



          <div className='accessories-slider'>
            
            <BiChevronLeftCircle size={50} className='icon' />

            <div className='accessories-slider-item'>
              <Zoom direction="up">
                <img src={bike} alt="bike" className='accessories-slider-item-image' />
              </Zoom>
              <Button content="Add to Cart" style={{ width: "90%", height: "15%", fontSize: "100%" }} />
            </div>
            
            <div className='accessories-slider-item'>
              <Zoom direction="up">
                <img src={bike} alt="bike" className='accessories-slider-item-image' />
              </Zoom>
              <Button content="Add to Cart" style={{ width: "90%", height: "15%", fontSize: "100%" }} />
            </div>
            
            <div className='accessories-slider-item'>
              <Zoom direction="up">
                <img src={bike} alt="bike" className='accessories-slider-item-image' />
              </Zoom>
              <Button content="Add to Cart" style={{ width: "90%", height: "15%", fontSize: "100%" }} />
            </div>

            <BiChevronRightCircle size={50} className='icon' />

        </div>
      </div>

    <Footer />
    </div>
  )
}

export default Home;