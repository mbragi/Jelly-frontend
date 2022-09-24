import React, { useState, useEffect } from 'react';
import './Cart.css';
import NavBar from '../../components/navBar/NavBar';
import Button from '../../components/button/Button';
import { BsArrowLeft } from 'react-icons/bs';
// import cart from "./cart.json";
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { addToCart, decreaseQuantity } from '../../helpers/cart';


function Cart() {
    const [cartTotal, setCartTotal] = useState(0);
    const cart = JSON.parse(localStorage.getItem('cart'));
    useEffect(() => {
        let cartSum = 0;
        const cart = JSON.parse(localStorage.getItem('cart'));
        cart.forEach(product => {
            let productTotal = parseInt(product.price) * product.quantity;
            cartSum += productTotal;
        });
        setCartTotal(cartSum);
    }, [JSON.parse(localStorage.getItem('cart'))]);
    return (
        <div className='cart'>
            <NavBar />
            <h1 className='cart-header'>Cart</h1>

            <div className='cart-body'>
                {/* <h3>Your Cart</h3> */}
                <div className='cart-body-inner'>

                    <div className='items-div'>

                        <p className='items-div-header'>Product</p>
                        <p className='items-div-header'>Price</p>
                        <p className='items-div-header'>Quantity</p>
                        <p className='items-div-header'>Total</p>

                        {
                            cart.map((item) => (
                                <React.Fragment key={item._id}>
                                    <p className='item'>
                                        <img src={item.img} alt="cart-item" className='item-img' />
                                        <p className='item-name'>{item.name}</p>
                                    </p>
                                    <p className='item'>${item.price}</p>
                                    <p className='item'>
                                        <Button content="+" style={{ width: "40px", height: "40px" }} onClick={() => { addToCart(item) }} />
                                        <p className='item-quantity'>{item.quantity}</p>
                                        <Button content="-" style={{ width: "40px", height: "40px" }} onClick={() => { decreaseQuantity(item) }} />
                                    </p>
                                    <p className='item'>${parseInt(item.price) * item.quantity}.00</p>
                                </React.Fragment>
                            ))
                        }

                    </div>

                    <div className='cart-summary'>
                        <p className='cart-summary-item cart-summary-header'>
                            <p>cart summary</p>
                        </p>
                        <p className='cart-summary-item'>
                            <p>subtotal</p>
                            <p>${cartTotal}.00</p>
                        </p>
                        <p className='cart-summary-item'>
                            <p>shipping price</p>
                            <p>$0.00</p>
                        </p>
                        <p className='cart-summary-item'>
                            <p>grand total</p>
                            <p>${cartTotal}.00</p>
                        </p>

                        <p className='cart-summary-disclaimer'>
                            <p className='disclaimer'>Shipping price might change based on your location</p>
                            <Button content="CHECK OUT" style={{ borderRadius: 5 }} className='button' />
                        </p>

                    </div>
                </div>

            </div>
            <Link to="/shop" className='continue'>
                <BsArrowLeft size={30} />
                <p>
                    Continue Shopping
                </p>
                <Footer />
            </Link>

            <Footer />
        </div>
    )
}

export default Cart;