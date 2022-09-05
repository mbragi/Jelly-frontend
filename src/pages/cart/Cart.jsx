import React from 'react';
import './Cart.css';
import NavBar from '../../components/navBar/NavBar';
import Button from '../../components/button/Button';

function Cart() {
  return (
    <div className='cart'>
       <NavBar /> 
        <h1 className='cart-header'>Cart</h1>

        <div className='cart-body'>
            <h3>Your Cart</h3>
            <div className='cart-body-inner'>
                <div className='cart-summary'>
                    <p className='cart-summary-item cart-summary-item-header'>
                        <p>cart summary</p>
                    </p>
                    <p className='cart-summary-item'>
                        <p>subtotal</p>
                        <p>$0.00</p>
                    </p>
                    <p className='cart-summary-item'>
                        <p>shipping price</p>
                        <p>$0.00</p>
                    </p>
                    <p className='cart-summary-item'>
                        <p>grand total</p>
                        <p>$0.00</p>
                    </p>

                    <p className='cart-summary-disclaimer'>
                        <p className='disclaimer'>Shipping price might change based on your location</p>
                        <Button content="CHECK OUT" style={{borderRadius: 5}} className='button' />
                    </p>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Cart;