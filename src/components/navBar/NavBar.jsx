import React, { useState } from 'react';
import "./NavBar.css";
import { MdLocalPhone, MdOutlineMailOutline, MdCancel } from "react-icons/md";
import { FaUserAlt, FaSearchLocation } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { useGlobalContext } from '../../context';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function NavBar({ currentPage }) {
  const [navbar, setNavbar] = useState(false);
  const [show, setShow] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  };
  window.addEventListener('scroll', changeNav)

  function page(page) {
    if (page === currentPage) return {
      borderBottom: " none"
    };
    return {};
  }

  const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
  const shower = () => {
    setShow(!show);
  }
  const { setIsLogin } = useGlobalContext()

  
  // To make the scroll smooth and return to top of page always

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

  return (
    <div className={show ? 'opacity' : ''}>
      <div className='top-margin'></div>
      <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>
        <div className='top'>
          <div className="btop">
            <div className='contact-details-container'>
              <p className='phone'>
                <MdLocalPhone size={30} color="rgba(203, 182, 182)" className="icon" />
                +86 1805723297
              </p>
              <p className='email'>
                <MdOutlineMailOutline size={30} color="rgba(203, 182, 182)" className="icon" />
                254510608@qq.com
              </p>
            </div>

            <div className='location-container'>
              <p className='store-locator'>
                <FaSearchLocation size={25} color="rgba(203, 182, 182)" className="icon" />
                Store Locator
              </p>

              <span className='slash'> / </span>

              <p className='dealers-enquiry'>
                <HiPencilAlt size={25} color="rgba(203, 182, 182)" className="icon" />
                Dealers Enquiry
              </p>

              <span className='slash'> / </span>

              <FaUserAlt size={25} color="rgba(203, 182, 182)" className="icon" onClick={() => setIsLogin(true)} />

            </div>
          </div>
        </div>

        <div className='bottom btop'>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logo} alt="logo" className='logo' />
            </Link>
          </div>

          {/* <div className='menu-div'> */}
          {/* </div> */}
          <div className="links-section">
            <img src={menu} alt="menu" className='menu' onClick={shower} />
            <div className={show ? 'links show' : 'links'}>
              <p onClick={shower} style={{ cursor: 'pointer' }} className='exit'><MdCancel size={35} /></p>
              <Link to='/' className='link home-link' style={page("home")} onClick={ScrollToTop()}  >Home</Link>
              <p className='link' About Us style={page("about")} onClick={ScrollToTop()} >Video</p>
              <Link to="/shop" className='link' style={page("shop")} onClick={ScrollToTop()} >Shop</Link>
              {/* <Link to="/product" className='link' style={page("products")}>Product</Link> */}
              <Link to="/contact" className='link' style={page("contact")} onClick={ScrollToTop()} >Contact us</Link>
              <p className='link' style={page("faq")} onClick={ScrollToTop()} >FAQ</p>
              <Link to='/cart' className='link cart-container'>
                <p className='cart-quantity'>{cart}</p>
                <IoMdCart size={30} color="black" />
              </Link>
              <span className='borrowed-link align'>
                <FaSearchLocation size={15} color="rgba(203, 182, 182)" className="icon" />
                <span>Store Locator</span>
              </span>
              <span className='borrowed-link align'>
                <HiPencilAlt size={15} color="rgba(203, 182, 182)" className="icon" />
                <span>Dealers Enquiry</span>
              </span>
            </div>

          </div>
        </div>
      </nav>
    </div>
  )
}
