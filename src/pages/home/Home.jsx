import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
// import intro from "../../assets/intro.mp4";
import bike from "../../assets/512.png";
import turnSignal from "../../assets/turn-signal.jpg";
import target from "../../assets/images/target.png";
import eye from "../../assets/images/eye.png";
import Button from "../../components/button/Button";
import Footer from '../../components/footer/Footer';
import "./Home.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { MdDirectionsBike, MdDirectionsCar, MdDirectionsBus, MdOutlineStar } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";
// import { addToCart, removeFromCart } from '../../helpers/cart';
import { addToCart } from '../../helpers/cart';
import MobileBar from '../../components/mobileBar/MobileBar';
import founders from './founders.json'
    // console.log(loading)
 
  function getQuantity(_id) {
    let cart = localStorage.getItem('cart');

    if (cart) {
      cart = JSON.parse(cart);
      let cartProduct = cart.find((product) => product._id === _id);

      if (cartProduct) return <span className="item-quantity-in-cart">{cartProduct.quantity}</span>;
      return '';
    }
  }

  useEffect(() => {
    fetchData();
    pageResized();
  }, []);

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

  const accessoriesPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
  }
  const accessoriesNext = () => {
    const numberOfPages = Math.ceil(totalProducts / productsPerPage);
    if (currentPage < numberOfPages) setCurrentPage(currentPage => currentPage + 1);
  }


function Home (){

  return (
    <div className='cntainer'>

      <NavBar currentPage="home" />

      <MobileBar />
      <div className="imgcontainer resize-max">
        <img src={bike} alt="evtop" className='evtopimg' />
      </div>

      <div className='features-div'>

        <div className='features-slider-div'>
          <BiChevronLeftCircle size={50} className='icon' onClick={() => { prev() }} />
          <Fade direction="up" spy={featuresIndex} className='slider-attention-seeker'>
            <img src={require(`../../assets/${featuresArray[featuresIndex]}`)} alt="bike" className='slider-item' />
          </Fade>
          <BiChevronRightCircle size={50} className='icon' onClick={() => { next() }} />
        </div>


      </div>


      <div className='transport-cost-div resize-max'>
        <h1 className='transport-cost-header'>Transportation Cost Comparison (Monthly)</h1>
        <div className='vehicles'>
          <div className='vehicle'>
            <MdDirectionsBike size={100} className='icon' />
            <p className='description-price'>${200 * distance}.00</p>
          </div>
          <div className='vehicle'>
            <MdDirectionsCar size={100} className='icon' />
            <p className='description-price'>${100 * distance}.00</p>
          </div>
          <div className='vehicle'>
            <MdDirectionsBus size={100} className='icon' />
            <p className='description-price'>${50 * distance}.00</p>
          </div>
        </div>

        <div className='input-range-div'>
          <p className='input-range-title'>Daily Usage 1km (s)</p>
          <input type='range' className='input-range' min={0} max={1000} value={distance} onInput={(event) => { setDistance(event.target.value) }} />
        </div>
      </div>

      <div className='promo'>
        <div className="resize-promo resize-max">
          <Fade direction="up" spy={featuresIndex} className='promo-attention-seeker'>
            <img src={turnSignal} alt="promo" className='promo-img' />
          </Fade>
          <div className='promo-info'>
            <h2 className='promo-header'>Jelly e-indicaator</h2>


            <div className='ratings'>
              <MdOutlineStar size={20} color="orange" />
              <MdOutlineStar size={20} color="orange" />
              <MdOutlineStar size={20} color="orange" />
              <MdOutlineStar size={20} color="orange" />
              <MdOutlineStar size={20} color="orange" />
              <p className='number-of-ratings'>(20)</p>
            </div>

            <p className='promo-price'>Buy at: $99</p>
            <p className='promo-desc'>
              Refer friends and get upto Rs. 5000/- OFF on final price Jelly App connected | Removable battery | Ignition key switch with handle lock | BIS Approved Cell | Peddle Assist sensor with multi riding modes
            </p>
            <Button content="Buy Now" style={{ width: '100%', height: '50px' }} />
          </div>
        </div>
      </div>

      <div className='accessories-div resize-max'>
        <div className='accessories-header'>
          <p className='accessories-title'>Accessories</p>
          <Button content="View More" style={{ width: "20%", height: "15%", fontSize: "100%" }} />
        </div>



        <div className='accessories-slider'>

          <BiChevronLeftCircle size={50} className='icon' onClick={() => { accessoriesPrev() }} />
          {loading ? <h1>Loading...</h1> :
            currentProducts.map((product) => (
              <div key={product._id} className='accessories-slider-item'>
                <p>{getQuantity(product._id)} {product.name}</p>
                <Zoom direction="up">
                  <img src={product.img} alt={product.name} className='accessories-slider-item-image' />
                </Zoom>
                <Button onClick={() => { addToCart(product, fetchData) }} content="Add to Cart" style={{ width: "90%", height: "15%", fontSize: "100%" }} />
              </div>
            ))
          }

          <BiChevronRightCircle size={50} className='icon' onClick={() => { accessoriesNext() }} />

        </div>
      </div>

      <div className='about-us'>
        <div className='about-us-header'>
          <h1>Our Mission & Vision</h1>
        </div>

        <div className='mission-vision'>
          <div className='world-of-jelly'>
            <h1>JELLY</h1>
            <p>World of Jelly</p>
          </div>

          <div className='our-mission'>
            <img src={target} alt="" />
            <p>Our Mission</p>
          </div>

          <div className='our-vision'>
            <img src={eye} alt="" />
            <p>Our Vision</p>
          </div>

        </div>

        <div className='mission'>
          <h1> Our Mission</h1>
          <p>Refer friends and get upto Rs. 5000/-OFF on final price Jelly App connected
          <br />| Removable battery | Ignition key switch with handle lock | BIS Approved Cell | Peddle Assist sensor with multi riding modes</p>
        </div>

        <div className='our-awesome-team'>
          <div className='our-awesome-team-header'>
            <h1>Our Awesome Team</h1>
          </div>

          <p> PRESENTING THE MINDS BEHIND JELLY. A UNIFIED TEAM OF EXPERTS WHO ARE PASSIONATELY DRIVEN BY THE CONCEPT OF SMART SOLUTIONS, BRINGING NEW ENERGY PRODUCT DESIGNED FOR THE INDIAN TERRAIN. THEY ENSURE THAT COMFORT AND STYLE GO HAND-IN-HAND.</p>
        </div>

        <div className='founder'>
          <div className='founder-details-box'>
            <div className='founder-image'>
              <img src={turnSignal} alt="" />
            </div>
            <h1>XXXXXXXXX Name</h1>
            <p>FOUNDER</p>
          </div>

          <div className='founder-voice'>
            <h1>Founder Voice</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea minus itaque nostrum obcaecati vero in numquam quaerat tempore, rerum voluptates doloribus quasi molestias! Consequuntur illo quidem eos velit, quisquam ea.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eos, earum temporibus dignissimos tempora qui suscipit praesentium hic debitis iure ducimus. Exercitationem, dicta non quos nihil laborum nulla quo nemo.
            </p>
          </div>

        </div>

        <div className='team-details-container'>
          {
            founders.map((founder, index) => (
              <React.Fragment key={index}>
                <div className='team-details-box'>
                  <div className='team-details-image'>
                    <img src={turnSignal} alt={founder.name} />
                  </div>
                  <h2 className='team-name'>{founder.name}</h2>
                  <p className="team-position">{founder.position}</p>
            
                  <Button content="View Details" style={{ height: '50px', borderRadius:'0px' }} />
                </div>
            
              </React.Fragment>
            ))
          }
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Home;