import React from 'react';
import AdminFrame from '../../components/adminFrame/AdminFrame';
import dailyRevenue from '../../assets/daily-revenue.png';
import dailyVisitors from '../../assets/daily-visitors.png';
import dailySignups from '../../assets/daily-signups.png';
import dailyOrder from '../../assets/daily-order.png';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <AdminFrame currentPage='dashboard'>
        <div className='dashboard'>
            <div className='mini-stats'>

              <div className='mini-stat'>

                <div className='top-stat'>
                  <div className='stat-img-container' style={{ backgroundColor: "rgba(95, 181, 99, 1)" }}>
                    <img src={dailyRevenue} alt="daily-revenue" className='stat-img' />
                  </div>
                  <div className='stat-desc'>
                    <span className='stat-title'>Daily Revenue</span>
                    <span className='stat-count'>1,500</span>
                  </div>
                </div>

                <p className='bottom-stat'>+3% than yesterday</p>
              </div>

              <div className='mini-stat'>

                <div className='top-stat'>
                  <div className='stat-img-container' style={{ backgroundColor: "rgba(67, 157, 240, 1)" }}>
                    <img src={dailyVisitors} alt="daily-revenue" className='stat-img' />
                  </div>
                  <div className='stat-desc'>
                    <span className='stat-title'>Daily Signups</span>
                    <span className='stat-count'>1,500</span>
                  </div>
                </div>

                <p className='bottom-stat'>+3% than yesterday</p>
              </div>

              <div className='mini-stat'>

                <div className='top-stat'>
                  <div className='stat-img-container' style={{ backgroundColor: "rgba(154, 3, 30, 1)" }}>
                    <img src={dailySignups} alt="daily-revenue" className='stat-img' />
                  </div>
                  <div className='stat-desc'>
                    <span className='stat-title'>Daily visitors</span>
                    <span className='stat-count'>1,500</span>
                  </div>
                </div>

                <p className='bottom-stat'>+3% than yesterday</p>
              </div>

              <div className='mini-stat'>

                <div className='top-stat'>
                  <div className='stat-img-container' style={{ backgroundColor: "rgba(56, 56, 62, 1)" }}>
                    <img src={dailyOrder} alt="daily-revenue" className='stat-img' />
                  </div>
                  <div className='stat-desc'>
                    <span className='stat-title'>Daily Order</span>
                    <span className='stat-count'>1,500</span>
                  </div>
                </div>

                <p className='bottom-stat'>+3% than yesterday</p>
              </div>

            </div>

          <div className='period-nav'>
            <span className='period'>Daily</span>
            <span className='period'>Monthly</span>
            <span className='period'>Yearly</span>
            <div className='arrows'>
              <span className='arrow'>{"<"}</span>
              <span className='arrow'>{">"}</span>
            </div>
          </div>
          <div className='stat-charts'></div>
        </div>
    </AdminFrame>
  )
}

export default AdminDashboard;