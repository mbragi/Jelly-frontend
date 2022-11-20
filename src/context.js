import React, {useContext, useState, useEffect} from "react";
import axios from "axios";
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [switchpop, setSwitch] = useState(false);
    const [login_cart, setLoginCart] = useState({})
    const [dailyUsers, setDaliyUsers] = useState();
    const [previousUsers, setPreviousUsers] = useState();
    function addToCart(newProduct, cb){
        let cart = localStorage.getItem('cart');
        if(Object.keys(login_cart).length !==0 && login_cart.constructor === Object){
            if(cart) {
                cart = JSON.parse(cart);
                const itemInCart = cart.find((product) => product._id === newProduct._id );
        
                if(itemInCart){
                cart = cart.map((product) => (
                    product._id === newProduct._id ? {...product, quantity: product.quantity + 1} : product
                ));
                localStorage.setItem('cart', JSON.stringify(cart));
                }else{
                cart.push({ ...newProduct, quantity: 1 });
                localStorage.setItem('cart', JSON.stringify(cart));
                }
        
            }else{
                localStorage.setItem('cart', JSON.stringify([{...newProduct, quantity: 1}]));
            }
            if(cb) cb();    
        }else{
            setIsLogin(true)
        }
    }

    useEffect(() => {
        axios.get(`https://script.google.com/macros/s/AKfycbyfZV8MYJnfjfGsegopvyzSnvyt1G59OXFj0EClEo-hNlEH5Vh_NXcDNBYQLTeibM6SUw/exec`)
        .then((res) => {
            setDaliyUsers(res.data.data[0][1])
            setPreviousUsers(res.data.data[0][0])
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return <AppContext.Provider value={{
            isLogin,setIsLogin,
            switchpop,setSwitch,
            login_cart,setLoginCart, addToCart,
            dailyUsers, previousUsers,
            isSignUp, setIsSignUp
            }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}