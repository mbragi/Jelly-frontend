import React from 'react'
import './MobileBar.css';
import { HiHome, HiShoppingCart } from "react-icons/hi";
import { BsShopWindow } from "react-icons/bs";
function MobileBar(){
    return(
        <div className='mobile-bar'>
            <div className="mobile-icons">
                <HiHome size ={30} />
                <h3>Home</h3>
            </div>
            <div className="mobile-icons">
                <BsShopWindow size ={30} />
                <h3>Shop</h3>
            </div>
            <div className="mobile-icons">
                <HiShoppingCart size ={30} />
                <h3>Cart(0)</h3>
            </div>
        </div>
    )
}

export default MobileBar