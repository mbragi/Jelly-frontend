import React from 'react';
import './TopNav.css';
import { FaHome } from 'react-icons/fa';

function TopNav() {
  return (
    <nav className='top-nav'>
        <input type='text' placeholder='Search here...' className='top-nav-search' />
        <FaHome size={20} />
        <FaHome size={20} />
        <FaHome size={20} />
    </nav>
  )
}

export default TopNav;