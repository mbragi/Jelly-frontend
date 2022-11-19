import React, { useState, useEffect } from 'react';
import "./Home.css";
import NavBar from "../../components/navBar/NavBar";
// import intro from "../../assets/intro.mp4";
import bike from "../../assets/512.png";
import turnSignal from "../../assets/turn-signal.jpg";
import target from "../../assets/images/target.png";
import eye from "../../assets/images/eye.png";
import Button from "../../components/button/Button";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { MdDirectionsBike, MdDirectionsCar, MdDirectionsBus, MdOutlineStar } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";
// import { addToCart, removeFromCart } from '../../helpers/cart';
// import { addToCart } from '../../helpers/cart';
import MobileBar from '../../components/mobileBar/MobileBar';
import LoginPage from '../login/LoginPage';
import RegisterPage from '../register/RegisterPage';
// import founders from './founders.json'
import axios from 'axios';
import Welcome from '../../components/welcome/Welcome';
import { useGlobalContext } from '../../context'
import { Link } from 'react-router-dom'
import ReactCountryFlag from "react-country-flag"
import Footer from '../../components/footer/Footer';
    // console.log(loading)
 

function Home() {
  const [featuresIndex, setFeaturesIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [distance, setDistance] = useState(500);
  const [changeAbout, setChangeAbout] = useState(1);
  const [aboutStyles, setAboutStyles] = useState([
    {
      content: 0,
      backgroundColor: '#D9D9D9',
      boxShadow: 'none',
      cursor: 'pointer'
    },
    {
      content: 1,
      backgroundColor: 'white',
      boxShadow: '0px 4px 22px 0px #00000054',
      cursor: 'pointer'
    },
    {
      content: 2,
      backgroundColor: '#D9D9D9',
      boxShadow: 'none',
      cursor: 'pointer'
    }
  ])
  const featuresArray = ["512.png", "bike.jpg"];
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  function pageResized() {
    if (window.innerWidth > 1000) setProductsPerPage(3);
    if ((window.innerWidth <= 1000) && (window.innerWidth >= 500)) setProductsPerPage(2);
    if (window.innerWidth < 500) setProductsPerPage(1);
  }
  window.addEventListener('resize', pageResized);

  // const URL = process.env.REACT_APP_SERVER_URL

  const BASE_URL = 'https://jelly-online-api.herokuapp.com'

  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}/api/category`)
    let data = res.data
    console.log(res);
    //const category = data.Cdata
    const product = data.Pdata
    // setCategories(category)
    setProducts(product);
    setTotalProducts(product.length);
    setLoading(false);
    // getCurrentProducts(product);

    //remove this after using i have to do this to avoid build errors
    // console.log(loading)
  };


  const about_array = [
    {
      name: "World of evTop",
      content: "Refer friends and get upto Rs. 5000/-OFF on final price Jelly App connected| Removable battery | Ignition key switch with handle lock | BIS Approved Cell | Peddle Assist sensor with multi riding modes"
    },
    {
      name: "Our Mission",
      content: "Refer friends and get upto Rs. 5000/-OFF on final price Jelly App connected| Removable battery | Ignition key switch with handle lock | BIS Approved Cell | Peddle Assist sensor with multi riding modes"
    },
    {
      name: "Our Vision",
      content: "Refer friends and get upto Rs. 5000/-OFF on final price Jelly App connected| Removable battery | Ignition key switch with handle lock | BIS Approved Cell | Peddle Assist sensor with multi riding modes"
    }
  ]
  const transform = (e) =>{
    const transformArray = aboutStyles.map((item) => (
      parseInt(e.currentTarget.id) === item.content ? {...item, backgroundColor: "white", boxShadow: "0px 4px 22px 0px #00000054"} :  {...item, backgroundColor: '#D9D9D9', boxShadow: 'none' }
    ))
    setAboutStyles(transformArray)
  }
  const about_change = (e) => {
    if(parseInt(e.currentTarget.id) === 0){
      setChangeAbout(0);
      transform(e);
    }
    else if(parseInt(e.currentTarget.id) === 1){
      setChangeAbout(1)
      transform(e);
    }
    else if(parseInt(e.currentTarget.id) === 2){
      setChangeAbout(2);
      transform(e);
    }
    else{return;}
  }

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
  
  const {isLogin} = useGlobalContext()
  const {switchpop, addToCart, isSignUp} = useGlobalContext();
  // const obj = {};
  // if(Object.keys(obj).length === 0 && obj.constructor === Object){
  //   alert("jjjj")
  // }
  return (
    <div className='cntainer'>

      <NavBar currentPage="home" />
      {isSignUp ? <Welcome /> : isLogin ? !switchpop ? <LoginPage /> : <RegisterPage /> : null}
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
          <Link to = '/shop' style={{width: '36%', height: '15%'}}>
            <Button content="View More" style={{ width: "100%", height: "100%", fontSize: "100%" }} />
          </Link>
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
                <Button onClick={() => { addToCart(product, fetchData) }} content="Add to Cart" style={{ width: "100%", height: "15%", fontSize: "100%" }} />
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
          <div className='world-of-jelly' onClick = {about_change} style = {aboutStyles[0]} id = {0}>
            <h1 style = {{fontSize: '1.6rem', color: 'blue', textAlign: 'center'}}><i>evTop</i></h1>
            <p>World of evTop</p>
          </div>

          <div className='our-mission' onClick = {about_change} style = {aboutStyles[1]} id = {1}>
            <img src={target} alt="" />
            <p>Our Mission</p>
          </div>

          <div className='our-vision' onClick = {about_change} style = {aboutStyles[2]} id = {2}>
            <img src={eye} alt="" />
            <p>Our Vision</p>
          </div>

        </div>

        <div className='mission'>
          <h1> {about_array[changeAbout].name}</h1>
          <p>{about_array[changeAbout].content}</p>
        </div>

        {/* <div className='our-awesome-team'>
          <div className='our-awesome-team-header'>
            <h1>Our Awesome Team</h1>
          </div>

          <p> PRESENTING THE MINDS BEHIND EVTOP. A UNIFIED TEAM OF EXPERTS WHO ARE PASSIONATELY DRIVEN BY THE CONCEPT OF SMART SOLUTIONS, BRINGING NEW ENERGY PRODUCT DESIGNED FOR THE INDIAN TERRAIN. THEY ENSURE THAT COMFORT AND STYLE GO HAND-IN-HAND.</p>
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
        </div> */}

      </div>
      
      
      <div className='our-partners'>
        <h1>OUR PARTNERS</h1>
        <h3>What sets us apart from the competition ?  <span>Our ability to listen to our customers !</span></h3>
        <p>We work with China Truck Factory provide trucks(including customized trucks) - fulfilling orders with short delivery times and complex technical specifications. We have earned the trust of thousands of clients, including these fine clients:</p>

        <div className='country-flag'>
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{
                width: '180px',
                height: '150px',
                borderRadius: "15px",
                cursor:'pointer',
            }}
            title="United States"
          />

          <ReactCountryFlag
            countryCode="GB"
            svg
            style={{
                width: '180px',
                height: '150px',
                borderRadius: "15px",
                cursor:'pointer'
            }}
            title="United Kingdom"
          />
          <ReactCountryFlag
            countryCode="CN"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="China"
          />
          <ReactCountryFlag
            countryCode="BR"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Brazil"
          />
          <ReactCountryFlag
            countryCode="PY"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Paraguay"
          />
          <ReactCountryFlag
            countryCode="BE"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Belgium"
          />

          <ReactCountryFlag
            countryCode="IT"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Italy"
          />

          <ReactCountryFlag
            countryCode="EU"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="European Union"
          />

          <ReactCountryFlag
            countryCode="DE"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Germany"
          />

          <ReactCountryFlag
            countryCode="FR"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="France"
          />

          <ReactCountryFlag
            countryCode="TH"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Thailand"
          />

          <ReactCountryFlag
            countryCode="AU"
            svg
            style={{
              width: '180px',
              height: '150px',
              borderRadius: "15px",
              cursor:'pointer'
            }}
            title="Australia"
            
          />

        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default Home;