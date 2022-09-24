import React, { useState } from 'react';
import "./NavBar.css";
import { MdLocalPhone, MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
// import menu from "../../assets/menu.png";

export default function NavBar({ currentPage }) {
  const [navbar, setNavbar] = useState(false);

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
      borderBottom: " 2px solid black"
    };
    return {};
  }

  const cart = JSON.parse(localStorage.getItem('cart')).length;
  return (
    <div>
      <div className='top-margin'></div>
      <nav className={navbar ? 'nav-bar active' : 'nav-bar'}>
        <div className='top'>
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
              <MdLocationOn size={25} color="rgba(203, 182, 182)" className="icon" />
              Store Locator
            </p>

            <span className='slash'> / </span>

            <p className='dealers-enquiry'>
              <GrFormEdit size={30} color="rgba(203, 182, 182)" className="icon" />
              Dealers Enquiry
            </p>

            <span className='slash'> / </span>

            <FaUserAlt size={25} color="rgba(203, 182, 182)" className="icon" />

          </div>
        </div>

        <div className='bottom'>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logo} alt="logo" className='logo' />
            </Link>
          </div>

          {/* <div className='menu-div'> */}
          {/* </div> */}
          <div className='links'>
            {/* <img src={menu} alt="menu" className='menu' /> */}
            <Link to='/' className='link home-link' style={page("home")}>Home</Link>
            <p className='link' About Us style={page("about")}></p>
            <Link to="/shop" className='link' style={page("shop")}>Shop</Link>
            <p className='link' style={page("products")}>Product</p>
            <Link to="/contact" className='link' style={page("contact")}>Contact Us</Link>
            <p className='link' style={page("faq")}>FAQ</p>
            <Link to='/cart' className='link cart-container'>
              <p className='cart-quantity'>{cart}</p>
              <IoMdCart size={30} color="black" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
