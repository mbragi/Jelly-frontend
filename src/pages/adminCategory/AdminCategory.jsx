import React, { useState } from 'react';
import './AdminCategory.css';
import AdminFrame from '../../components/adminFrame/AdminFrame';
import Button from '../../components/button/Button';
import { useEffect } from 'react';
import battery from "../../assets/battery.png"
import { CloudArrowUp } from 'phosphor-react';
import { MdCancel } from "react-icons/md";
import axios from 'axios';
import { uploadFile } from '../../utils/cloudinary';
const BASE_URL = 'https://evtop-api.herokuapp.com'


function AdminCategory() {
    const [bool, setBool] = useState(false)
    const [data, setData] = useState([])
    const [create, setCreate] = useState({});
    const [counter, setCounter] = useState(0)

    async function addCategory(e) {
        e.preventDefault()
        setBool(!bool)
    }
    async function onInputChange(e) {
        console.log(e.target.name);
        const { name } = e.target;
        const url = await uploadFile(e.target.files[0], setCounter);
        let newData = { ...create }
        newData[name] = url;
        setCreate(newData)
        setCounter(0)
    }
    function inputChange(e) {
        const { name, value } = e.target
        const newObj = {}
        newObj[name] = value
        setCreate(newObj)
    }
    async function httpGetCategories() {
        const request = await axios.get(`${BASE_URL}/api/cat`)
        const response = request.data
        const category = response.data

        setData(category)
    }
    async function httpCreateCategory(e) {
        e.preventDefault()
        console.log(create)
        try {
            const request = await axios.post(`${BASE_URL}/api/`, create)
            const response = request.data
            console.log(response)
            if (response) {
                httpGetCategories()
                setBool(false)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        httpGetCategories()
    }, [])
    return (
        <AdminFrame currentPage='categories'>
            <div className={bool ? 'overlay' : ''}>
                {
                    bool &&
                    <>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                            <div className="admin-categories" style={{ width: '55%' }}>
                                <MdCancel size={30} style={{ float: 'right', cursor: 'pointer' }} onClick={() => setBool(!bool)} />
                                <div style={{ width: "100%", display: "flex", flexDirection: 'row-reverse', marginBottom: '1.5rem' }}>
                                    <div style={{ width: "50%", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: 'flex-end', paddingRight: '2rem' }}>
                                        {counter > 0 && <p>Loading...{Math.floor(counter)}%</p>}
                                        <div style={{ width: '90%' }}>
                                            <img src={create.img_url || battery} alt="upload File " style={{ borderRadius: '10px', objectFit: 'contain', height: "13rem", width: '100%', border: '0.5px solid black' }} />
                                        </div>
                                        <button style={{ cursor: 'pointer', background: " rgb(53, 112, 236)", height: '2rem', width: '6rem', float: "right", border: 'none', marginTop: '5px' }}>
                                            <label id='label'>
                                                <input name='img_url' type="file" onChange={onInputChange} style={{ opacity: 0, position: 'absolute', width: '1rem' }} />
                                                <span style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: '100%' }}>
                                                    <CloudArrowUp size={18} />
                                                    upload
                                                </span>
                                            </label>
                                        </button>
                                    </div>
                                    <div style={{ width: "50%", display: "flex", flexDirection: "column", marginLeft: '1rem', marginTop: "2rem" }}>
                                        <label htmlFor='inputs' style={{ fontSize: "1rem", fontWeight: '800', lineHeight: '3rem' }}>Category Name
                                        </label>
                                        <input
                                            style={{ width: '100%', borderRadius: '5px', border: "0.3px solid black", padding: '0.7rem' }}
                                            placeholder="Name of category..."
                                            onChange={inputChange}
                                            autoComplete='off'
                                            name='name'
                                            type='text'
                                            required
                                        />
                                    </div>
                                </div>
                                <div style={{ width: '100%', marginTop: "0.5rem", padding: '5px', display: 'flex', justifyContent: 'center' }}>
                                    <Button content="Create Category" onClick={httpCreateCategory} style={{ borderRadius: '10px', width: '200px' }} />
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className='admin-category'>
                <div className='category-header'>
                    <h1>Categories</h1>
                    <Button content='Add Category' onClick={addCategory} style={{ width: '140px', height: '43px', boxShadow: '0px 2.242px 9.24px rgba(0, 0, 0, 0.25)', borderRadius: '11.61765px' }} />
                </div>

                <div className='admin-categories'>
                    <div className='categories-header'>
                        <div className='entries'>
                            <span>show</span>
                            <select>
                                <option >{data.length}</option>
                            </select>
                            <span>entries</span>
                        </div>

                        <div className='search-container'>
                            <span>Search: </span>
                            <input type='text' className='search-input' />
                        </div>
                    </div>
                    <hr style={{ width: '100%' }} />

                    <ul className='categories-body' style={{ height: "3rem", lineHeight: '2rem' }}>
                        <li style={{ fontSize: '24px' }}>Name</li>
                        <li style={{ fontSize: '24px' }}>Product</li>
                        <li style={{ fontSize: '24px' }}>Total Sales</li>
                        <li style={{ fontSize: '24px' }}>Status</li>
                        <li style={{ fontSize: '24px' }}>Action</li>
                    </ul>
                    {

                        data.map((item, idx) => {
                            console.log(data)
                            return (
                                <ul className='categories-body' key={idx} style={{ height: "3.5rem" }}>
                                    <li>{item.name}</li>
                                    <li>{item.product_number}</li>
                                    <li>Total Sales</li>
                                    <li>Status</li>
                                    <li>Action</li>
                                </ul >
                            )
                        })
                    }
                </div>

            </div>
        </AdminFrame>
    )
}

export default AdminCategory;