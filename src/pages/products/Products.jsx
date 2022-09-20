import React, { useState, useEffect } from 'react';
import NavBar from '../../components/navBar/NavBar';
import Button from '../../components/button/Button';
import './Products.css';
import logoFaint from '../../assets/logo-faint.png';
import Product from '../../components/product/Product';
import Paigination from '../../components/pagination/Pagination';
import Footer from '../../components/footer/Footer';

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const productsPerPage = 8;
  useEffect(() => {
    const URL = process.env.REACT_APP_SERVER_URL
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(`${URL}/category`)
      const data = await res.json()
      const category = [data.Cdata]
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

            {/* {loading ? <h1>Loading...</h1> : */}
            {/* categories.map((category, idx) => { */}
            {console.log(categories)}
            {/*  return ( */}
            {/* <div className='category' key={idx}> */}
            {/* <input id={`${category._id}`} type="checkbox" name={category.categoryName} /> */}
            {/* <label htmlFor='' className='label'>{category.categoryName}</label> */}
            {/* </div> */}
            {/* ) */}
            {/*  }) */}
            {/* } */}

            <div className='category'>
              <input id="" type="checkbox" name="" />
              <label htmlFor='' className='label'>LFP BMS</label>
            </div>

            <div className='category'>
              <input id="" type="checkbox" name="" />
              <label htmlFor='' className='label'>Li-ion cell for EV</label>
            </div>

            <div className='category'>
              <input id="" type="checkbox" name="" />
              <label htmlFor='' className='label'>LFP BMS</label>
            </div>

            <div className='category'>
              <input id="" type="checkbox" name="" />
              <label htmlFor='' className='label'>Li-ion cell for EV</label>
            </div>

            <div className='category'>
              <input id="" type="checkbox" name="" />
              <label htmlFor='' className='label'>LFP BMS</label>
            </div>

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
                return (
                  < Product key={index} product={product} />
                  // console.log(`${product}`)
                )
              })

            }
          </div>
        </div>
        <Paigination productsPerPage={productsPerPage} totalProducts={totalProducts} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      </div >
      <Footer />
    </div >
  )
}

export default Products;