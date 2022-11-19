import React from 'react';
import './SideNav.css';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { MdOutlineHome, MdLogout } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

function SideNav({ currentPage, ...otherProps }) {
    return (
        <>
            <div className='navigator' style={{ position: 'relative' }}></div>
            <nav className='navigator' {...otherProps}>
                <img src={logo} alt="logo" className='nav-logo' />
                <Link to="/admin" className='route' style={{ backgroundColor: currentPage === 'dashboard' ? '#3C95EE' : '' }} >
                    <div className='nav-link' >
                        <MdOutlineHome size={20} />
                        <p>Dashboard</p>
                    </div>
                </Link>

                <Link to="/admin/users" className='route' style={{ backgroundColor: currentPage === 'users' ? '#3C95EE' : '' }} >
                    <div className='nav-link'>
                        <FaUsers size={20} />
                        <p>Users</p>
                    </div>
                </Link>

                <Link to="/admin/categories" className='route' style={{ backgroundColor: currentPage === 'categories' ? '#3C95EE' : '' }} >
                    <div className='nav-link'>
                        <MdOutlineHome size={20} />
                        <p>Categories</p>
                    </div>
                </Link>

                <Link to="/admin/products" className='route-product' style={{ backgroundColor: currentPage === 'products' ? '#3C95EE' : '' }} >
                    <div className='nav-product'>
                        <MdOutlineHome size={20} />
                        <div>
                            <p style={{ marginTop: "0px" }}>Products</p>
                            <span className='product-sub' style={{
                                display: currentPage === 'products' ? 'block' : 'none'
                            }}
                            >
                                <Link to='/admin/addproduct' className='route-addproduct' style={{ backgroundColor: currentPage === 'products' ? '#3C95EE' : '' }} >
                                    <p>Add Product</p>
                                </Link>
                            </span>
                        </div>
                    </div>
                </Link>

                <Link to="/admin/sectionI" className='route-add-content' style={{ backgroundColor: currentPage === 'add-content' ? '#3C95EE' : '' }} >
                    <div className='nav-add-content'>
                        <MdOutlineHome size={20} />
                        <div>
                            <p style={{ marginTop: "0px" }}> Add Content</p>
                            <span className='add-content-sub' style={{
                                display: currentPage === 'products' ? 'block' : 'none'
                            }}
                            >
                                <Link to='/admin/sectionII' className='route-sections' style={{ backgroundColor: currentPage === 'add-content' ? '#3C95EE' : '' }} >
                                    <p>Section II</p>
                                </Link>

                                <Link to='/admin/sectionIII' className='route-sections' style={{ backgroundColor: currentPage === 'add-content' ? '#3C95EE' : '' }} >
                                    <p>Section III</p>
                                </Link>

                                <Link to='/admin/sectionIV' className='route-sections' style={{ backgroundColor: currentPage === 'add-content' ? '#3C95EE' : '' }} >
                                    <p>Section IV</p>
                                </Link>
                            </span>
                        </div>
                    </div>
                </Link>

                <div className='route logout'>
                    <div className='nav-link'>
                        <MdLogout size={20} />
                        <p>logout</p>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default SideNav;