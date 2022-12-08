
import React, { useEffect, useState } from 'react'
import "./Home.css";
import turnSignal from "../../assets/turn-signal.jpg";
// import Banner from '../../assets/new layout/banner2.jpg'
import beforeCompany from '../../assets/new layout/beforeCompanyPics.jpg'
import logo from '../../assets/new layout/logo.png'

import ladyA from '../../assets/ladyAfter.jpg'
import one from '../../assets/new layout/1.png'
import two from '../../assets/new layout/2.jpg'
import three from '../../assets/new layout/3.jpg'
import four from '../../assets/new layout/4.jpg'
import five from '../../assets/new layout/5.jpg'
import six from '../../assets/new layout/6.jpg'
import { MdLocalPhone, MdOutlineMailOutline, } from "react-icons/md";
import { FaUserAlt, FaSearchLocation } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import Button from '../../components/button/Button';
import { MdOutlineStar } from "react-icons/md";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { Fade, Zoom } from "react-awesome-reveal";
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import ImageSlider from '../../components/imageSlider/ImageSlider';



const BASE_URL = 'https://jelly-online-api.herokuapp.com'

function Home() {
  // const [show, setShow] = useState(false)s
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [data, setData] = useState({})


  async function httpGetHomePage() {
    const res = await axios.get(`${BASE_URL}/api/app/homepage`)
    const map = res.data.data.map(item => item).reverse()
    setData(map[0])
  }
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}/api/category`)
    let data = res.data
    console.log(res);
    const product = data.Pdata
    setProducts(product);
    setTotalProducts(product.length);
    setLoading(false);
    // getCurrentProducts(product);

    //remove this after using i have to do this to avoid build errors
    // console.log(map[0])
    // console.log(data)
  };

  function pageResized() {
    if (window.innerWidth > 1000) setProductsPerPage(3);
    if ((window.innerWidth <= 1000) && (window.innerWidth >= 500)) setProductsPerPage(2);
    if (window.innerWidth < 500) setProductsPerPage(1);
  }
  window.addEventListener('resize', pageResized);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  function getQuantity(_id) {
    let cart = localStorage.getItem('cart');

    if (cart) {
      cart = JSON.parse(cart);
      let cartProduct = cart.find((product) => product._id === _id);

      if (cartProduct) return <span className="item-quantity-in-cart">{cartProduct.quantity}</span>;
      return '';
    }
  }
  const accessoriesPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage => currentPage - 1);
  }
  const accessoriesNext = () => {
    const numberOfPages = Math.ceil(totalProducts / productsPerPage);
    if (currentPage < numberOfPages) setCurrentPage(currentPage => currentPage + 1);
  }
  //Navigation Related
  // const shower = () => {
  //   setShow(!show);
  // }
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, [pathname]);
    return null;
  }
  useEffect(() => {
    fetchData();
    pageResized();
    httpGetHomePage()
  }, []);
  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
  // const featuresArray = [lady, lady2, lady3];
  const featuresArray = [data.img_one, data.img_two, data.img_three];


  const { addToCart } = useGlobalContext();

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <section className="navigation">
        <img src={data.img_main} alt="background" className='photoUrl' />
        <img src={logo} alt="background" className='logoUrl' />
        <div className='nav-one'>
          <div className='nav-top'>

            <p className='phone'>
              <MdLocalPhone size={30} color="rgb(106,87,28)" className="icon" />
              +86 1805723297
            </p>
            <p className='email'>
              <MdOutlineMailOutline size={30} color="rgb(106,87,28)" className="icon" />
              254510608@qq.com
            </p>
            <p className='store-locator'>
              <FaSearchLocation size={25} color="rgb(106,87,28)" className="icon" />
              Store Locator
            </p>
            <p className='dealers-enquiry'>
              <HiPencilAlt size={25} color="rgb(106,87,28)" className="icon" />
              Dealers Enquiry
            </p>
            <FaUserAlt size={25} color="rgb(106,87,28)" className="icon" />
          </div>
        </div>
        <div className='nav-two'>
          <div className='nav-sub' >
            {/* <p onClick={shower} style={{ cursor: 'pointer' ,vis}} className='exit'><MdCancel size={35} /></p> */}
            <Link to='/' className='lin' onClick={ScrollToTop()}  >Home</Link>
            <p className='lin' onClick={ScrollToTop()} >Video</p>
            <Link to="/shop" className='lin' onClick={ScrollToTop()} >Shop</Link>

            <p className='lin' onClick={ScrollToTop()} >FAQ</p>
            <Link to="/contact" className='lin' onClick={ScrollToTop()} >Contact Us</Link>
            <Link to='/cart' className='link cart-container' >
              <p className='cart-quantity'>{cart}</p>
              <IoMdCart size={30} color="white" />
            </Link>
          </div>

        </div>
      </section>
      <section className='section-two'>
        <ImageSlider images={featuresArray} />
        <img src={ladyA} alt="ladyAfter" className='ladyAfter' />
      </section>
      <section className="section-three">
        <div className='accessories-div resize-max white-change'>
          <div className='accessories-header'>
            <p className='accessories-title'>Accessories</p>
            <Link to='/shop' style={{ width: '36%', height: '15%' }} >
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

        <div className='accessories-div resize-max white-change'>
          <div className='accessories-header'>
            <p className='accessories-title'>Hot Product</p>
            <Link to='/shop' style={{ width: '36%', height: '15%' }}>
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
        <div>
          <div className='promo'>
            <div className="resize-promo resize-max">
              <Fade direction="up" className='promo-attention-seeker'>
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
        </div>
      </section>
      <section className='section-four'>
        <div className='section-four-top'>
          <img src={beforeCompany} alt="company" />
          <div className='section-four-gallery'>
            <div className="section-four-sideA">
              <img src={one} alt="1" className='small' />
              <img src={two} alt="2" className='small' />
              <img src={three} alt="3" className='large' />
            </div>
            <div className="section-four-sideB">
              <img src={four} alt="4" className='large' />
              <img src={five} alt="5" className='small' />
              <img src={six} alt="6" className='small' />
            </div>
            <div className="section-four-title">
              <p className="text">
                A group of energetic and diligent people are gathered here
                Dedicated time and energy to the BMS management system, more affirmation and enthusiasm for new energy.
                Evtop Bms Hardware engineer Mr Tomasz said:Bms development seems to be considered simple by everyone, but when laying out the PCB circuit, it needs a very careful & reasonable design to get the best performance.At the same time, matching suitable IC, MOS, and all raw materials is a key step. Every piece of BMS is like having many living organs..
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </div>
  )
}

export default Home
