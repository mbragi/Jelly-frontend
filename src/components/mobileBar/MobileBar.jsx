import React from 'react'
import './MobileBar.css';
import { HiHome, HiShoppingCart } from "react-icons/hi";
import { BsShopWindow } from "react-icons/bs";
import { Link } from "react-router-dom";
function MobileBar() {
    //collect details from local storage
    const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
    return (
        <div className='mobile-bar'>
            <Link to='/' className='mobile-link'>
                <div className="mobile-icons">
                    <HiHome size={30} />
                    <h3>Home</h3>
                </div>
            </Link>
            <Link to='/shop' className='mobile-link'>
                <div className="mobile-icons">
                    <BsShopWindow size={30} />
                    <h3>Shop</h3>
                </div>
            </Link>
            <Link to='/cart' className='mobile-link'>
                <div className="mobile-icons">
                    <HiShoppingCart size={30} />
                    <h3>Cart({cart})</h3>
                </div>
            </Link>
        </div>
    )
}

export default MobileBar