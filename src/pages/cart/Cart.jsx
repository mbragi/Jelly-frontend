import React, { useState, useEffect } from 'react';
import './Cart.css';
import NavBar from '../../components/navBar/NavBar';
import Button from '../../components/button/Button';
import { BsArrowLeft } from 'react-icons/bs';
// import cart from "./cart.json";
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import { decreaseQuantity } from '../../helpers/cart';
import MobileBar from '../../components/mobileBar/MobileBar';
import { useGlobalContext } from '../../context';
import LoginPage from '../login/LoginPage';
import Welcome from '../../components/welcome/Welcome';
import RegisterPage from '../register/RegisterPage';

function Cart() {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    function calculateCartTotal() {
        if (!localStorage.getItem('cart')) return;
        setCart(JSON.parse(localStorage.getItem('cart')));

        let cartSum = 0;
        JSON.parse(localStorage.getItem('cart')).forEach(product => {
            let productTotal = parseInt(product.price) * product.quantity;
            cartSum += productTotal;
        });
        setCartTotal(cartSum);

    }
    function cartCheckout(){
        if(!localStorage.getItem('cart')){
            //restrict from going to the next page
        }else{
            
            const user_id =JSON.parse(localStorage.getItem('userData'))._id
            const products = []
            cart.forEach((product) =>{
                products.push(
                    {
                        product_id: product._id,
                        product_name: product.name,
                        quantity:product.quantity,
                        price: product.price
                    }
                )
            })

            const checkoutData = {
                user_id,
                products:[
                    ...products
                ],
                total: cartTotal,
                sub_total: cartTotal,
                grand_total:cartTotal,
                shipping_price: "0.00"
            }

            console.log(checkoutData)
           
        }
    }
    useEffect(() => {
        calculateCartTotal();
    }, []);

    const { addToCart, isLogin, switchpop, isSignUp } = useGlobalContext();

    return (
        <div className='cart'>
            <NavBar />
            {isSignUp ? <Welcome /> : isLogin ? !switchpop ? <LoginPage /> : <RegisterPage /> : null}
            <MobileBar />
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
                                    <div className='item'>
                                        <img src={item.img} alt="cart-item" className='item-img' />
                                        <p className='item-name'>{item.name}</p>
                                    </div>
                                    <p className='item'>${item.price}</p>
                                    <p className='item'>
                                        <Button content="+" style={{ width: "40px", height: "40px" }} onClick={() => { addToCart(item, calculateCartTotal) }} />
                                        <p className='item-quantity'>{item.quantity}</p>
                                        <Button content="-" style={{ width: "40px", height: "40px" }} onClick={() => { decreaseQuantity(item, calculateCartTotal) }} />
                                    </p>
                                    <p className='item'>${parseInt(item.price) * item.quantity}.00</p>
                                </React.Fragment>
                            ))
                        }
                    </div>
                    <div className='cart-summary'>
                        <div className='cart-summary-item cart-summary-header'>
                            <p>cart summary</p>
                        </div>
                        <div className='cart-summary-item'>
                            <p>subtotal</p>
                            <p>${cartTotal}.00</p>
                        </div>
                        <div className='cart-summary-item'>
                            <p>shipping price</p>
                            <p>$0.00</p>
                        </div>
                        <div className='cart-summary-item'>
                            <p>grand total</p>
                            <p>${cartTotal}.00</p>
                        </div>

                        <p className='cart-summary-disclaimer'>
                            <p className='disclaimer' onClick={cartCheckout}>Shipping price might change based on your location</p>
                            <Link to="/checkout">
                                <Button content="CHECK OUT" style={{ borderRadius: 5 }} className='button' />
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
            <Link to="/shop" className='continue'>
                <BsArrowLeft size={30} />
                <p>
                    Continue Shopping
                </p>
            </Link>

            <Footer />
        </div>
    )
}

export default Cart;