import React from 'react'
import './AdminProducts.css'
import AdminFrame from '../../components/adminFrame/AdminFrame'
import Button from '../../components/button/Button'
// import ProImg from '../../assets/2600mah 1.jpg'
import Dot from '../../assets/images/3dotvector.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const BASE_URL = 'https://jelly-online-api.herokuapp.com'

function AdminProducts() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const [loading, setLoading] = useState(false)
    async function httpGetCategoryById(e) {
        const { value } = e.target
        setLoading(!loading)
        const request = await axios.get(`${BASE_URL}/api/products/category/${value}`)
        const response = request.data.data
        console.log(response)
        setData(response)
    }
    async function httpGetProducts() {
        const request = await axios.get(`${BASE_URL}/api/category`)
        const response = request.data.Pdata
        const res = request.data.Cdata
        // console.log(response)
        setData(response)
        setCategory(res)
    }
    useEffect(() => {
        httpGetProducts()
    }, [])
    return (
        <AdminFrame currentPage={'products'}>
            <div className='admin-products-container'>
                <header className='admin-product-add-header'>
                    <h1>Products</h1>
                    <Button content={'Add Products'} style={{
                        backgroundColor: ' rgba(53, 112, 236, 0.67)',
                        borderRadius: '8px',
                        width: '150px'
                    }}
                        onClick={() => { navigate("/admin/addproduct") }}
                    />
                </header>
                <section className='show-product'>
                    <header className='header-show-product'>
                        <div className='left-show-product'>
                            <p>Show</p>
                            <select name='category_id' onChange={httpGetCategoryById}>
                                <option >SEARCH BY CATEGORY</option>
                                {
                                    category.map((item, idx) => {
                                        return (
                                            <option value={item._id} key={idx}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <p>Entries</p>:<p>{category.length}</p>
                        </div>
                        <div className='search-show-product'>
                            <p>Search:</p>
                            <input type="text" />
                        </div>
                    </header>
                    <section className='show-product-section'>
                        <ul className='show-product-items'>
                            <li className='item-product'>Product</li>
                            <li className='item-product'>Name</li>
                            <li className='item-product'>Price</li>
                            <li className='item-product'>Total Sales</li>
                            <li className='item-product'>Stock</li>
                            <li className='item-product'>Status</li>
                            <li className='item-product'>Action</li>
                        </ul>
                        {data.map((item, idx) => {
                            // console.log(item)
                            return (
                                <div className='show-product-items' key={idx}>
                                    <p className='item-product item-imge'>
                                        <img src={item.img} alt="product-img" />
                                    </p>
                                    <p className='item-product'>{item.name}</p>
                                    <p className='item-product'>{item.price}</p>
                                    <p className='item-product'>Total sales</p>
                                    <p className='item-product'>{item.available_quantity || "N/A"}</p>
                                    <button type='checkbox' className='item-product'>{item.inStock === true ? "Active" : "N/A"}</button >
                                    <p className='item-product'>
                                        <img src={Dot} alt="3 dot vector" />
                                    </p>
                                </div>
                            )
                        })}
                        {/* <ul className='show-product-items'>
                            <li className='item-product item-imge'>
                                <img src={ProImg} alt="product-img" />
                            </li>
                            <li className='item-product'>Li-ion cell For EV</li>
                            <li className='item-product'>¥38</li>
                            <li className='item-product'>38</li>
                            <li className='item-product'>100</li>
                            <li className='item-product'>Active</li>
                            <li className='item-product'>
                                <img src={Dot} alt="3 dot vector" />
                            </li>
                        </ul>
                        <ul className='show-product-items'>
                            <li className='item-product item-imge'>
                                <img src={ProImg} alt="product-img" />
                            </li>
                            <li className='item-product'>Li-ion cell For EV</li>
                            <li className='item-product'>¥38</li>
                            <li className='item-product'>38</li>
                            <li className='item-product'>100</li>
                            <li className='item-product'>Active</li>
                            <li className='item-product'>
                                <img src={Dot} alt="3 dot vector" />
                            </li>
                        </ul>
                        <ul className='show-product-items'>
                            <li className='item-product item-imge'>
                                <img src={ProImg} alt="product-img" />
                            </li>
                            <li className='item-product'>Li-ion cell For EV</li>
                            <li className='item-product'>¥38</li>
                            <li className='item-product'>38</li>
                            <li className='item-product'>100</li>
                            <li className='item-product'>Active</li>
                            <li className='item-product'>
                                <img src={Dot} alt="3 dot vector" />
                            </li>
                        </ul> */}
                    </section>
                </section>
            </div>
        </AdminFrame>
    )
}

export default AdminProducts