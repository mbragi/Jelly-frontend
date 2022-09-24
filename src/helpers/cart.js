function addToCart(newProduct){
    let cart = localStorage.getItem('cart');
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
        localStorage.setItem('cart', JSON.stringify([newProduct]));
    }
    // console.log(JSON.parse(localStorage.getItem('cart')));
    }

function removeFromCart(product){
    let cart = localStorage.getItem('cart');
    // console.log(typeof(cart))
    if(cart){
        cart = JSON.parse(cart).filter(({ _id }) => (
            _id !== product._id
        ));
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function decreaseQuantity(productInFocus){
    let cart = localStorage.getItem('cart');
    console.log(productInFocus.name);
    if(cart){
        cart = JSON.parse(cart);
        let product = cart.find((product) => product._id === productInFocus._id);
        if (!product) return;
        if(product.quantity === 1) {
            return removeFromCart(product);
        }

        cart = cart.map(product => product._id === productInFocus._id ? { ...product, quantity: product.quantity - 1 } : product);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

}

export { addToCart, removeFromCart, decreaseQuantity };