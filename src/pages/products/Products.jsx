import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Button from '../../components/button/Button';
import './Products.css';
import logoFaint from '../../assets/logo-faint.png';
import Product from '../../components/product/Product';
import Pagination from '../../components/pagination/Pagination';
import Footer from '../../components/footer/Footer';
import Category from '../../components/category/Category';


function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const productsPerPage = 8;
  useEffect(() => {
    // const URL = process.env.REACT_APP_SERVER_URL
    const BASE_URL = 'https://jelly-online-api.herokuapp.com'

    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${BASE_URL}/category`)
      const data = await res.json()
      const category = data.Cdata
      const product = data.Pdata
      setCategories(category)
      // console.log(categories)
      setProducts(product);
      // console.log(products)

      setTotalProducts(product.length);
      setLoading(false);
    };
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(currentProducts.length);

  return (
    <div className='container'>
      <NavBar currentPage="shop" />
      <div className='products-page'>

        <div className='product-header'>
          <img src={logoFaint} alt="logo" className='header-logo' />
        </div>

        <div className='sort-container'>
          <select className='select'>
            <option value="">sort</option>
            <option value="100">100</option>
            <option value="200">200</option>
          </select>
        </div>

        <div className='product-body'>
          <div className='categories'>
            <h2>Categories</h2>

            {loading ? <h1>Loading...</h1> :
              categories.map((category, idx) => {
                console.log(category)
                return (
                  <Category key={idx} category={category} />
                )
              })
            }

            <div className="price-filter">
              <h2>Price Filter</h2>
              <input type="range" className='price-range' />
              <div className='price'>
                <p><span>Price</span>: $0.00 - $0.00</p>
                <Button content="Filter" style={{ borderRadius: "10px" }} />
              </div>
            </div>

          </div>

          <div className='products'>

            {loading ? <h1>Loading...</h1> :
              products.map((product, index) => {

                console.log(product)
                return (
                  < Product key={index} product={product} />
                )
              })

            }
          </div>
        </div>
        <Pagination productsPerPage={productsPerPage} totalProducts={totalProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      </div >
      <Footer />
    </div >
  )
}

export default Products;