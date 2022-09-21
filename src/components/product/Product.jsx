import React from 'react';
import './Product.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
function Product({ product }) {
  const navigate = useNavigate()
  return (
    <form className='product'>
      <p className='product-name'>{product.name}</p>
      <img src={product.img} alt={product.name} className='product-img' />
      <p className="product-price">${product.price}</p>
      <Button content="Details" style={{ borderRadius: "10px" }} type='submit' onClick={(e) => { navigate('/details') }} />
    </form>
  )
}

export default Product;