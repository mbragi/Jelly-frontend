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
        </div>
    </AdminFrame>
  )
}

export default AdminProducts