import React, {useContext, useState} from "react";
const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false)
    const [switchpop, setSwitch] = useState(false);
    const [login_cart, setLoginCart] = useState({})
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
    return <AppContext.Provider value={{
            isLogin,setIsLogin,
            switchpop,setSwitch,
            login_cart,setLoginCart, addToCart
            }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}