import React from 'react';
import "./NavBar.css";
import { MdLocalPhone, MdOutlineMailOutline, MdLocationOn } from "react-icons/md";
import { GrFormEdit } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";

export default function NavBar() {
  return (
    <nav className='nav-bar'>
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
                <MdLocationOn size={30} color="rgba(203, 182, 182)" className="icon" />
                Store Locator
              </p>

              <span> / </span>
              
              <p className='dealers-enquiry'>
                <GrFormEdit size={30} color="rgba(203, 182, 182)" className="icon" />
                Dealers Enquiry
              </p>

              <span> / </span>

                <FaUserAlt size={30} color="rgba(203, 182, 182)" className="icon" />

            </div>
        </div>

        <div className='bottom'>
          <div className='logo-container'></div>
          <div className='links'>
            <p className='link home-link'>Home</p>
            <p className='link'About Us></p>
            <p className='link'>Shop</p>
            <p className='link'>Product</p>
            <p className='link'>Contact Us</p>
            <p className='link'>FAQ</p>
            <div className='cart-container'>
              <p className='cart-quantity'>0</p>
              <IoMdCart size={30} color="black" />
            </div>
          </div>
        </div>
    </nav>
  )
}
