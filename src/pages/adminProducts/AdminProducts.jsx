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
    const [isActive, setIsActive] = useState(true)
    async function httpGetCategoryById(e) {
        const { value } = e.target
        setLoading(!loading)
        const request = await axios.get(`${BASE_URL}/api/products/category/${value}`)
        const response = request.data.data
        console.log(response)
        setData(response)
    }

    async function httpUpdateProduct(e) {
        const { id, checked } = e.target
        console.log(id, checked)
        if (checked === true) {
            setIsActive(false)
        } else {
            setIsActive(true)
        }
        let data = { inStock: isActive }
        console.log(data)
        const res = await axios.put(`${BASE_URL}/api/update/${id}`, data)
        console.log(res.data)
        httpGetProducts()
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
                            console.log(item.inStock)
                            return (
                                <div className='show-product-items' key={idx}>
                                    <p className='item-product item-imge'>
                                        <img src={item.img} alt="product-img" />
                                    </p>
                                    <p className='item-product'>{item.name}</p>
                                    <p className='item-product'>{item.price}</p>
                                    <p className='item-product'>Total sales</p>
                                    <p className='item-product'>{item.available_quantity || "N/A"}</p>
                                    <button type='submit' className={item.inStock === true ? 'item-producta' : "item-productb"}><span style={{ width: '100%' }}><input type="text" className='item-product' checked={item.inStock} id={item._id} style={{ width: '100%', position: 'absolute', right: '3%', opacity: '0' }} onClick={httpUpdateProduct} />
                                        {item.inStock === true ? "Available" : "Out of Stock"}
                                    </span>
                                    </button >
                                    <p className='item-product'>
                                        <img src={Dot} alt="3 dot vector" />
                                    </p>
                                </div>
                            )
                        })}
                    </section>
                </section>
            </div>
        </AdminFrame >
    )
}

export default AdminProducts