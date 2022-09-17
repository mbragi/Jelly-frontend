import React from 'react';
import './Product.css';
import Button from '../button/Button';
function Product({ product }) {
  return (
    <div className='product'>
        <p className='product-name'>{product.name}</p>
        <img src={require(`../../assets/${product.img}`)} alt={product.name} className='product-img' /> 
        <p className="product-price">${product.price}</p>
        <Button content="Details" style={{borderRadius: "10px"}} />
    </div>
  )
}

export default Product;