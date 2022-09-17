import React from "react";
import './CheckOut.css';
import NavBar from "../../components/navBar/NavBar";
import { FaArrowLeft } from 'react-icons/fa'
import item from "../../assets/turn-signal.png"
import Button from '../../components/button/Button'
import Footer from "../../components/footer/Footer";
function CheckOut (){
    return(
        <div>
            <NavBar />
            <div className="col-2">
                <div className="cart-sum">
                    <h1>User Information</h1>
                    <h2>Shipping Address</h2>
                    <div className="input">
                        <input type="text" placeholder="Full name*" />
                        <input type="text" placeholder="Email*" />
                        <input type="text" placeholder="Contact Number*" />
                    </div>
                    <h2>Address</h2>
                    <div className="input">
                        <input type="text" placeholder="Address Line1*" />
                        <input type="text" placeholder="Address Line2" />
                        <input type="text" placeholder="Zip Code" />
                        <span>Select Country</span>
                        <span>Select State</span>
                        <input type="text" placeholder="City" />
                    </div>
                    <h2>Billing Address</h2>
                    <input type="checkbox" /> Billing Address same as shipping address
                    <div className="input">
                        <input type="text" placeholder="Full name*" />
                        <input type="text" placeholder="Email*" />
                        <input type="text" placeholder="Contact Number*" />
                    </div>
                    <h2>Address</h2>
                    <div className="input">
                        <input type="text" placeholder="Address Line1*" />
                        <input type="text" placeholder="Address Line2" />
                        <input type="text" placeholder="Zip Code" />
                        <span>Select Country*</span>
                        <span>Select State*</span>
                        <input type="text" placeholder="City" /><br />
                    </div>
                    <div className="flex" style = {{color: 'blue',fontSize: '1.3rem', fontWeight: 'bold'}}>
                        <FaArrowLeft style = {{fontSize: '1.2rem', marginTop: '3%'}} /> Continue Shopping <br /><br />
                    </div>
                </div>
                <div className="cart-order">
                    <h2>Your order</h2>
                    <hr />
                    <div className="col-3">
                        <section className="groupc">
                            <img src={item} alt="product" />
                            <h2>evTop e-indicator</h2>
                        </section>
                        <h3>元1410</h3>
                    </div>
                    <hr />
                    <section className="section">
                        <hr />
                        <div className="groupc" style={{width: '100%'}}>
                            <h2 style={{color: 'gray'}}>Cart Subtotal</h2>
                            <h3>元1410</h3>
                        </div>
                        <hr />
                        <div className="groupc" style={{width: '100%'}}>
                            <h2 style={{color: 'gray'}}>Shippping</h2>
                            <h3>+元250</h3>
                        </div>
                        <hr />
                        <div className="groupc" style={{width: '100%'}}>
                            <h2>Order Total</h2>
                            <h3>元1660</h3>
                        </div>
                        <hr />
                        <div className="paymeth">
                            <h2>Payment Method</h2>
                            <hr />
                            <div className="paypal">
                                <div className="groupc"  style= {{ height: '100%', width: '40%', margin: 'auto 10% '}}>
                                    <span style = {{fontSize: '5rem', color: 'lightgray'}}>●</span>
                                    <h2>Paypal</h2>
                                </div>
                            </div>
                        </div>
                        <div className="btnc">
                            <Button content = 'Proceed To Checout' style = {{marginTop: '5%', width: '100%', height: '60px'}} /> <br />
                        </div>
                    </section>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CheckOut;