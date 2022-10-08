import React from 'react';
import './SideNav.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import { MdOutlineHome } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

function SideNav({ currentPage }) {
  return (
    <>
    <div className='navigator' style={{ position: 'relative' }}></div>
    <nav className='navigator'>
        <img src={logo} alt="logo" className='nav-logo' />
        <Link to="/admin" className='route' style={{ backgroundColor: currentPage === 'dashboard' ? '#3C95EE' : '' }} >
            <div className='nav-link' >
                <MdOutlineHome size={20} />
                <p>Dashboard</p>
            </div>
        </Link>

        <Link to="/admin-users" className='route' style={{ backgroundColor: currentPage === 'users' ? '#3C95EE' : '' }} >
            <div className='nav-link'>
                <FaUsers size={20} />
                <p>Users</p>
            </div>
        </Link>

        <Link to="/admin-categories" className='route' style={{ backgroundColor: currentPage === 'categories' ? '#3C95EE' : '' }} >
            <div className='nav-link'>
                <MdOutlineHome size={20} />
                <p>Categories</p>
            </div>
        </Link>

        <Link to="/admin-products" className='route' style={{ backgroundColor: currentPage === 'products' ? '#3C95EE' : '' }} >
            <div className='nav-link'>
                <MdOutlineHome size={20} />
                <p>Products</p>
            </div>
        </Link>

        <div className='route logout'>
            <div className='nav-link'>
                <MdOutlineHome size={20} />
                <p>logout</p>
            </div>
        </div>
    </nav>

    </>
  )
}

export default SideNav;