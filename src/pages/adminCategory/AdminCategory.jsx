import React from 'react';
import './AdminCategory.css';
import AdminFrame from '../../components/adminFrame/AdminFrame';
import Button from '../../components/button/Button';

function AdminCategory() {
  return (
    <AdminFrame currentPage='categories'>
        <div className='admin-category'>
            <div className='category-header'>
                <h1>Categories</h1>
                <Button content='Add Category' style={{ width: '140px', height: '43px', boxShadow: '0px 2.242px 9.24px rgba(0, 0, 0, 0.25)', borderRadius: '11.61765px' }} />
            </div>

            <div className='admin-categories'>
                <div className='categories-header'>
                    <div className='entries'>
                        <span>show</span>
                        <select>
                            <option value='4'>4</option>
                        </select>
                        <span>entries</span>
                    </div>

                    <div className='search-container'>
                        <span>Search: </span>
                        <input type='text' className='search-input' />
                    </div>
                </div>
                <hr style={{ width: '100%' }} />
                <div className='categories-body'>
                    <h3>Name</h3>
                    <h3>Product</h3>
                    <h3>Total Sales</h3>
                    <h3>Status</h3>
                    <h3>Action</h3>
                </div>
            </div>

        </div>
    </AdminFrame>
  )
}

export default AdminCategory;