import React, { useState } from 'react'
import './AdminSectionI.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import pen from '../../assets/images/pen.png'
import { BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { uploadFile } from '../../utils/cloudinary'
import axios from 'axios';
const BASE_URL = 'https://evtop-api.herokuapp.com'



function AdminSectionI() {
    const [counter, setCounter] = useState(0)
    const [data, setData] = useState({})
    const [preview, setPreview] = useState(false)
    async function setImage(e) {
        const { name } = e.target
        console.log(e.target.files)
        const photoUrl = await uploadFile(e.target.files[0], setCounter)
        const newObj = { ...data }
        newObj[name] = photoUrl
        console.log(newObj)
        setData(newObj)
        setCounter(0)
        setPreview(true)
    }

    async function httpCreateBanner() {
        setPreview(false)
        console.log(data)
        const res = await axios.post(`${BASE_URL}/api/app/create/banner`, data)
        console.log(res.data)
        setData({})
    }

    return (
        <AdminFrame currentPage='sectionI'>
            <div className='sectionI'>
                <header className='sectionI-header'>
                    <h1>Section I</h1>

                    <button type='file'
                        style={{
                            cursor: 'pointer',
                            background: " rgb(53, 112, 236)",
                            height: '3.5rem',
                            width: '13rem',
                            float: "right",
                            border: 'none',
                            color: 'white',
                            borderRadius: '15px'
                        }} onClick={httpCreateBanner}>

                        <label id='label'>

                            <span style={{
                                display: 'flex',
                                gap: '5px',
                                alignItems: "center",
                                justifyContent: 'center',
                                width: '100%'
                            }}>
                                <CloudArrowUp size={18} />  Upload
                            </span>
                        </label>

                    </button>
                </header>

                <section className='sectionI-container'>
                    {counter > 0 && <p>Loading...{Math.floor(counter)}%</p>}
                    <div className='upload-main-image-sectionI'>
                        <input id='filez' type="file" name='photoUrl' onChange={setImage} />
                        <label htmlFor="filez">
                            <img src={pen} alt="product" style={{
                                width: '50px',
                                height: '40px',
                                float: 'right',
                                borderRadius: '5px',
                                backgroundColor: '#FFFFFF',
                                boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                objectFit: 'contain',
                                padding: '5px'
                            }} />
                        </label>
                        {
                            preview ? <img src={data.photoUrl} alt="" className="umi-sec" /> :
                                <h1 className='umi-sec'>Upload Main <br /> Image</h1>
                        }
                    </div>


                </section>


                <div className='sectionI-next'>

                    <Link to="/admin/sectionIIc" className='sectionI-next-link'>
                        <span> Next  </span>
                        <BsArrowRight size={35} color='blue' />
                    </Link>

                </div>

            </div>

        </AdminFrame>

    )
}

export default AdminSectionI