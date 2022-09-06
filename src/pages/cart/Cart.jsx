import React from 'react';
import './Cart.css';
import NavBar from '../../components/navBar/NavBar';

function Cart() {
  return (
    <div className='cart'>
       <NavBar /> 
        <h1 className='cart-header'>Cart</h1>
    </div>
  )
}

export default Cart;