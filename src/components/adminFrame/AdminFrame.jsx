import React from 'react';
import './AdminFrame.css';
import SideNav from '../sideNav/SideNav';
import TopNav from '../topNav/TopNav';

function AdminFrame({ currentPage, children }) {
  return (
    <div className='admin-frame'>
        <SideNav currentPage={currentPage} />
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