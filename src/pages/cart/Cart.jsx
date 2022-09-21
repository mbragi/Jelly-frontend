import React from 'react';
import './Cart.css';
import NavBar from '../../components/navBar/NavBar';
import Button from '../../components/button/Button';
import { BsArrowLeft } from 'react-icons/bs';
import cart from "./cart.json";
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';


function Cart() {
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
                                        <img src={require(`../../assets/${item.img_url}`)} alt="cart-item" className='item-img' />
                                        <p className='item-name'>{item.name}</p>
                                    </p>
                                    <p className='item'>{item.price}</p>
                                    <p className='item'>
                                        <Button content="+" style={{ width: "40px", height: "40px" }} />
                                        <p className='item-quantity'>{12}</p>
                                        <Button content="-" style={{ width: "40px", height: "40px" }} />
                                    </p>
                                    <p className='item'>{2400}</p>
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