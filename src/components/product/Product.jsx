import React from 'react';
import './Product.css';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom'
function Product({ product }) {
  // const URL = 'https://jelly-online-api.herokuapp.com'

  const navigate = useNavigate()
  function httpGetDetails(e) {
    e.preventDefault()
    //remove the item before setting new one
    localStorage.removeItem('product')
    //save response to browser storage
    localStorage.setItem('product', JSON.stringify({ id: product._id }))
    //navigate to the product page with product name
    // navigate(`/details/${product.name.replaceAll(' ','')}`)
    navigate(`/details/${product._id}`)
  }
  //console.log(product._id)
  return (
    <form className='product' onSubmit={httpGetDetails} >
      <p className='product-name' name={product.name} >{product.name}</p>
      <img src={product.img} alt={product.name} className='product-img' />
      <p className="product-price">${product.price}</p>
      <Button content="Details"
        style={{ borderRadius: "10px", width: '100%', margin: '0.4rem' }}
        name={product.name}
      />
    </form>
  )
}

export default Product;