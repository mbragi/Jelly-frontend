import React, { useState, useEffect } from 'react';
import './AdminFrame.css';
import SideNav from '../sideNav/SideNav';
import TopNav from '../topNav/TopNav';
import menu from '../../assets/admin-menu.png';

function AdminFrame({ currentPage, children }) {
  const [showSideBar, setShowSideBar] = useState(false);
  function calcShowSideBar(){
    setShowSideBar(window.innerWidth > 1000 ? true : false);
  }
  useEffect(() => {
    calcShowSideBar();
  }, []);
  window.addEventListener('resize', calcShowSideBar);

  return (
    <div className='admin-frame'>
        { showSideBar ? <SideNav currentPage={currentPage} /> : <img src={menu} alt='menu' className='admin-menu' /> }
        <div className='admin-body'>
            <TopNav />
            <div className='content'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default AdminFrame;