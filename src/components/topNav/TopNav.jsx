import React from 'react';
import './TopNav.css';
import { IoMdNotifications, IoMdSettings } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';

function TopNav() {
  return (
    <nav className='top-nav'>
        <input type='text' placeholder='Search here...' className='top-nav-search' />
        <IoPersonCircleSharp size={20} className='pointer' />
        <IoMdSettings size={20} className='pointer' />
        <IoMdNotifications size={20} className='pointer' />
    </nav>
  )
}

export default TopNav;