import React from 'react';
import AdminFrame from '../../components/adminFrame/AdminFrame';
import dailyRevenue from '../../assets/daily-revenue.png';
import dailyVisitors from '../../assets/daily-visitors.png';
import dailySignups from '../../assets/daily-signups.png';
import dailyOrder from '../../assets/daily-order.png';
import './AdminDashboard.css';

import websiteViews from '../../assets/website-views.png';
import websiteSales from '../../assets/website-sales.png';
import websiteOrder from '../../assets/website-order.png';
import name from '../../assets/name.png';

import Button from '../../components/button/Button';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
const BASE_URL = 'https://jelly-online-api.herokuapp.com'

function AdminDashboard() {
  const [user, setUser] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  async function httpGetAllUser(params) {
    setLoading(!loading)
    try {
      const request = await axios.get(`${BASE_URL}/api/auth/`)
      const res = request.data.data
      setUser(res)
      if (!user && user.length === 0) {
        setLoading(!loading)
        setMessage("No User's Signed Registered")
      }
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {

    httpGetAllUser()
    // return () => {
    //   second
    // }
  }, [])
  if (loading) return <h1 style={{ textAlign: 'center', width: "100%" }}>Loading...</h1>;
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
                <span className='stat-count'>34k</span>
              </div>
            </div>

            <p className='bottom-stat'>+3% than yesterday</p>
          </div>

          <div className='mini-stat'>

            <div className='top-stat'>
              <div className='stat-img-container' style={{ backgroundColor: "rgba(67, 157, 240, 1)" }}>
                <img src={dailyVisitors} alt="daily-signups" className='stat-img' />
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
                <img src={dailySignups} alt="daily-visitors" className='stat-img' />
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
                <img src={dailyOrder} alt="daily-order" className='stat-img' />
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

        <div className='stat-charts'>

          <div className='stat-chart-container'>
            <div className='stat-chart' style={{ backgroundImage: `url(${websiteViews})` }}></div>
            <div className='stat-chart-desc'>
              <h3 className='chart-title'>Website Views</h3>
              <span className='prev-performance'>Last 7 days performance</span>
            </div>
            <span className='time-updated'>updated 3 minutes ago</span>
          </div>

          <div className='stat-chart-container'>
            <div className='stat-chart' style={{ backgroundImage: `url(${websiteSales})` }}></div>
            <div className='stat-chart-desc'>
              <h3 className='chart-title'>Website Sales</h3>
              <span className='prev-performance'>Last 7 days performance</span>
            </div>
            <span className='time-updated'>updated 3 minutes ago</span>
          </div>

          <div className='stat-chart-container'>
            <div className='stat-chart' style={{ backgroundImage: `url(${websiteOrder})` }}></div>
            <div className='stat-chart-desc'>
              <h3 className='chart-title'>Website Order</h3>
              <span className='prev-performance'>Last 7 days performance</span>
            </div>
            <span className='time-updated'>updated 3 minutes ago</span>
          </div>

        </div>

        <div className='recent'>

          <div className='recent-orders'>
            <div className='recent-orders-header'>
              <h3>Recent Orders</h3>
              <Button content="View All" style={{ width: '60px', height: '30px', borderRadius: '5px', fontSize: '12px' }} />
            </div>

            <div className='ordered-items'>
              <h3 className='order-item'>Name</h3>
              <h3 className='order-item'>Units</h3>
              <h3 className='order-item'>Price</h3>
              <h3 className='order-item'>Order Date</h3>
              <h3 className='order-item'>Status</h3>

              <span className='order-item'>Lithium-ion Battery</span>
              <span className='order-item'>5</span>
              <span className='order-item'>500.00</span>
              <span className='order-item'>13/10/2022</span>
              <span className='order-item'>pending</span>

              <span className='order-item'>Lithium-ion Battery</span>
              <span className='order-item'>5</span>
              <span className='order-item'>500.00</span>
              <span className='order-item'>13/10/2022</span>
              <span className='order-item'>pending</span>

              <span className='order-item'>Lithium-ion Battery</span>
              <span className='order-item'>5</span>
              <span className='order-item'>500.00</span>
              <span className='order-item'>13/10/2022</span>
              <span className='order-item'>pending</span>

              <span className='order-item'>Lithium-ion Battery</span>
              <span className='order-item'>5</span>
              <span className='order-item'>500.00</span>
              <span className='order-item'>13/10/2022</span>
              <span className='order-item'>pending</span>

            </div>
          </div>

          <div className='recent-customers'>
            <div className='customer-header'>
              <h3>Recent Customers</h3>
            </div>

            <div className='customers'>

              <div className='customer'>

                <img src={name} alt='name' className='customer-img' />
                <div className='customer-text'>
                  <span>name</span>
                  <span>name@gmail.com</span>
                </div>
              </div>

              {/* <div className='customer'>
                  <img src={name} alt='name' className='customer-img'  />
                  <div className='customer-text'>
                    <span>name</span>
                    <span>name@gmail.com</span>
                  </div>
                </div>

                <div className='customer'>
                  <img src={name} alt='name' className='customer-img'  />
                  <div className='customer-text'>
                    <span>name</span>
                    <span>name@gmail.com</span>
                  </div>
                </div>

                <div className='customer'>
                  <img src={name} alt='name' className='customer-img'  />
                  <div className='customer-text'>
                    <span>name</span>
                    <span>name@gmail.com</span>
                  </div>
                </div>

                <div className='customer'>
                  <img src={name} alt='name' className='customer-img'  />
                  <div className='customer-text'>
                    <span>name</span>
                    <span>name@gmail.com</span>
                  </div>
                </div> */}

            </div>
          </div>

        </div>
      </div>
    </AdminFrame>
  )
}

export default AdminDashboard;