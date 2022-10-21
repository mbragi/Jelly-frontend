import React from 'react'
import './AdminProducts.css'
import AdminFrame from '../../components/adminFrame/AdminFrame'
import Button from '../../components/button/Button'
function AdminProducts() {
  return (
    <AdminFrame currentPage={'products'}>
        <div className='admin-products-container'>
           <header className='admin-product-add-header'>
                <h1>Products</h1>
                <Button content={'Add Products'} style ={{
                    backgroundColor: ' rgba(53, 112, 236, 0.67)',
                    borderRadius: '8px',
                    width:'150px'
                }} />
           </header>
           <section className='show-product'>
            <header className='header-show-product'>
                <div className='left-show-product'>
                    <p>Show</p>
                    <select>
                        <option value="4">4</option>
                        
                    </select>
                    <p>Entries</p>
                </div>
                <div className='search-show-product'>
                    <p>Search:</p>
                    <input type="text"/>
                </div>
            </header>
            <section className='show-product-section'>
                <ul className='show-product-header-items'>
                    <li className='item-head'>Product</li>
                    <li className='item-head'>Name</li>
                    <li className='item-head'>Price</li>
                    <li className='item-head'>Total Sales</li>
                    <li className='item-head'>Stock</li>
                    <li className='item-head'>Action</li>
                </ul>
            </section>
           </section>
        </div>
    </AdminFrame>
  )
}

export default AdminProducts