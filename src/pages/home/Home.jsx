import React, { useState, useEffect } from 'react';
import NavBar from "../../components/navBar/NavBar";
// import intro from "../../assets/intro.mp4";
import bike from "../../assets/512.png";
import turnSignal from "../../assets/turn-signal.jpg";
import Button from "../../components/button/Button";
import Footer from '../../components/footer/Footer';
import "./Home.css";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { MdDirectionsBike, MdDirectionsCar, MdDirectionsBus, MdOutlineStar } from "react-icons/md";
import { Fade, Zoom } from "react-awesome-reveal";
//import { addToCart, removeFromCart } from '../../helpers/cart';
import { addToCart } from '../../helpers/cart';
import MobileBar from '../../components/mobileBar/MobileBar';
import axios from 'axios';

function Home() {
  const [featuresIndex, setFeaturesIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [distance, setDistance] = useState(500);

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

      <Footer />
    </div>
  )
}

export default Home;