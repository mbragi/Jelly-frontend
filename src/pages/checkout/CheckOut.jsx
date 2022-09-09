import React from "react";
import './CheckOut.css';
import NavBar from "../../components/navBar/NavBar";
import { FaArrowLeft } from 'react-icons/fa'

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
                        <FaArrowLeft style = {{fontSize: '1.4rem', marginTop: '3%'}} /> Continue Shopping <br /><br />
                    </div>
                </div>
                <div className="cart-order">
                    <h1>Your order</h1>
                </div>
            </div>
        </div>
    )
}

export default CheckOut;