import React, { useState } from 'react';
import './Product.css';
import Button from '../button/Button';
// import { useNavigate } from 'react-router-dom';
function Product({ product }) {

  const URL = 'https://jelly-online-api.herokuapp.com'
  // const URL2 = 'http://localho/st:1050'

  // const navigate = useNavigate()
  const [data, setData] = useState({})
  function getDetails(e) {
    const { name } = e.target
    const findData = { name }
    //will clean this later
    setData(findData)
  }
  async function httpGetDetails(e) {
    e.preventDefault()
    let request = JSON.stringify(data)
    console.log(request)
    //get response 
    const res = await fetch(`${URL}/product/detail`, {
      method: 'post',
      headers: {
        'content-Type': 'application/json'
      },
      body: request
    })
    const product = await res.json()
    console.log(product)
    //check if the product exit before setting the local storage
    const productExit = JSON.parse(localStorage.getItem('product'))
    if(productExit){
      localStorage.removeItem('product')
      localStorage.setItem('product',JSON.stringify(product))
    }else{
      localStorage.setItem('product',JSON.stringify(product))
    }
    //save response to browser storage
  }
  return (
    <form className='product' onSubmit={httpGetDetails}>
      <p className='product-name' name={product.name}  >{product.name}</p>
      <img src={product.img} alt={product.name} className='product-img' />
      <p className="product-price">${product.price}</p>
      <Button content="Details"
        style={{ borderRadius: "10px", width: '80%', margin: '0.4rem' }}
        name={product.name}
        onClick={getDetails} 
      />
    </form>
  )
}

export default Product;