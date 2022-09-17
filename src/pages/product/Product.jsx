import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import './Product.css';
// import productHeaderBg from '../../assets/product-header-bg.png';

function Product() {
  return (
    <div className='container'>
        <NavBar />
        <div className='product-page'>
        <div className='productHeaderDiv'></div>
        </div>
    </div>
  )
}

export default Product;