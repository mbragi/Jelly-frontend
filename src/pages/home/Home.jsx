'use client';
import React, { useEffect, useState } from 'react'
import "./Home.css";
import beforeCompany from '../../assets/new layout/beforeCompanyPics.jpg'
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'

import ladyA from '../../assets/ladyAfter.jpg'

import { MdLocalPhone, MdOutlineMailOutline, } from "react-icons/md";
import { FaUserAlt, FaSearchLocation } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import Button from '../../components/button/Button';
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import { Zoom } from "react-awesome-reveal";
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LoginPage from '../login/LoginPage';
import RegisterPage from '../register/RegisterPage';
import Welcome from '../../components/welcome/Welcome';
import { Carousel } from 'react-responsive-carousel';
import MobileBar from '../../components/mobileBar/MobileBar'

const BASE_URL = 'https://evtop-api.herokuapp.com'

function Home() {
  // const [show, setShow] = useState(false)s
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [data, setData] = useState({})

  const {isLogin, switchpop, isSignUp,setIsLogin} =  useGlobalContext();
  async function httpGetHomePage() {
    const res = await axios.get(`${BASE_URL}/api/app/homepage`)
    const map = res.data.data.map(item => item).reverse()
    setData(map[0])
  }
  const fetchData = async () => {
    setLoading(true);
    const res = await axios.get(`${BASE_URL}/api/category`)
    let data = res.data
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



  const { addToCart } = useGlobalContext();
  

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      {isSignUp ? <Welcome /> : isLogin ? !switchpop ? <LoginPage /> : <RegisterPage /> : null}
      <MobileBar />
      <section className="navigation resize-max">
      <div className='section-four-top'>
          <img src={data.img_main} alt="background" className='photoUrl' />
        </div>
        {/* <img src={logo} alt="background" className='logoUrl' /> */}
        <div className='nav-one'>
          <div className='nav-top'>

            <p className='phone'>
              <MdLocalPhone size={30} color="rgb(106,87,28)" className="icon" />
              <span>+86 1805723297</span>
            </p>
            <p className='email'>
              <MdOutlineMailOutline size={29} color="rgb(106,87,28)" className="icon" />
              <span>254510608@qq.com</span>
            </p>
            <p className='store-locator'>
              <FaSearchLocation size={25} color="rgb(106,87,28)" className="icon" />
              <span>Store Locator</span>            
            </p>
            <p className='dealers-enquiry'>
              <HiPencilAlt size={25} color="rgb(106,87,28)" className="icon" />
              <span>Dealers Enquiry</span>
            </p>
            <FaUserAlt size={25} color="rgb(106,87,28)" className="icon" onClick={() => setIsLogin(true)} />
          </div>
        </div>
        <div className='nav-two'>
          <div className='nav-sub' >
            <Link to='/' className='lin' onClick={ScrollToTop()}  >Home</Link>
            <Link to="/shop" className='lin' onClick={ScrollToTop()} >Shop</Link>

            <p className='lin' onClick={ScrollToTop()} >FAQ</p>
            <Link to="/contact" className='lin' onClick={ScrollToTop()} >Contact Us</Link>
            <Link to='/cart' className='link cart-container' >
              <p className='cart-quantity'>{cart}</p>
              <IoMdCart size={30} color="white" />
            </Link>
          </div>

        </div>
      </section><br />
      <section className='section-two resize-max'>
        <div>
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            <div className = "check">
              <img src={slider1} className='slider-image' alt='slides' />

            </div>
            <div className = "check">
              <img src={slider2} className='slider-image' alt='slides' />

            </div>
          </Carousel>
        </div><br />
        <div className='section-four-top'>
          <img src={ladyA} alt="ladyAfter" className='ladyAfter' />
        </div>
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
      </section>
      <section className='section-four resize-max'>
        <div className='section-four-top'>
          <img src={beforeCompany} alt="company" />
        </div>
        <div className='section-four'>
          <Footer />
        </div>
      </section>
    </div>
  )
}

export default Home
