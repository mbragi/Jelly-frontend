import React from 'react'
import './AdminSectionIIc.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import pen from '../../assets/images/pen.png'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { uploadFile } from '../../utils/cloudinary';
const BASE_URL = 'https://jelly-online-api.herokuapp.com'



function SectionIIc() {
    const [loading, setLoading] = useState(false)
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [loading3, setLoading3] = useState(false)
    const [loading4, setLoading4] = useState(false)
    const [data, setData] = useState({})
    const [sub, setSub] = useState({})
    const [object, setObject] = useState({})
    const [counter, setCounter] = useState(0)

    async function httpGetBanner() {
        const res = await axios.get(`${BASE_URL}/api/app/banner`)
        const response = res.data.data
        const map = response.map(item => item).reverse()
        console.log(map)
        setData(map[0])
    }

    async function setImage(e) {
        const { name } = e.target
        const url = await uploadFile(e.target.files[0], setCounter)
        let newData = { ...sub }
        newData[name] = url;
        setSub(newData)
        const newObj = { ...object, ...sub }
        setObject(newObj)
        setCounter(0)
        if (sub.img_one) {
            setLoading1(true)
        } else if (sub.img_two) {
            setLoading2(true)
        } else if (sub.img_three) {
            setLoading3(true)
        } else if (sub.img_four) {
            setLoading4(true)
        }
    }

    async function httpCreateHomePageImages() {
        let Obj = { ...object, img_main: data._id }
        console.log(Obj)
        const res = await axios.post(`${BASE_URL}/api/app/create/home`, Obj)
        console.log(res.data)
    }

    useEffect(() => {
        setLoading(true)
        httpGetBanner()
        setLoading(false)
    }, [])

    return (
        <div>
            <AdminFrame currentPage='sectionIIc'>
                <div className='sectionIIc'>
                    <header className='sectionIIc-header'>
                        <h1>Section II</h1>


                        <button onClick={httpCreateHomePageImages} type='file'
                            style={{
                                cursor: 'pointer',
                                background: " rgb(53, 112, 236)",
                                height: '3.5rem',
                                width: '13rem',
                                float: "right",
                                border: 'none',
                                color: 'white',
                                borderRadius: '15px'
                            }}>

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

                    <section className='sectionIIc-container'>


                        <div className='uploaded-main-image-sectionIIc'>

                            {/* <input id='filezz' type="file" name='img' />
                            <label htmlFor="filezz">
                                <img src={pen} alt="product" style={{
                                    width: '50px',
                                    height: '40px',
                                    float: 'right',
                                    padding: '5px',
                                    borderRadius: '5px',
                                    backgroundColor: '#FFFFFF',
                                    boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                    objectFit: 'contain'
                                }} />
                            </label> */}
                            {
                                loading ?
                                    <h1 className='umi-secc'>Preview Uploaded Home <br /> Image</h1>
                                    : <img src={data.photoUrl} alt="sec1" className="umi-sec" />
                            }
                        </div>

                    </section>
                    <div className='uploaded-image-previewed-here'>
                        {counter > 0 && <p>Loading... {Math.floor(counter)} %</p>}
                        <>
                            <div className='uploaded-image-previewed' >
                                <label htmlFor='one'>
                                    <img src={pen} alt={'input imge'} style={{
                                        width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                        objectFit: 'contain',
                                        padding: '5px'
                                    }} />
                                    <input name="img_one" id='one' type="file" style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} onChange={setImage} />  {
                                        loading1 ?
                                            <img src={sub.img_one} alt="" className="uiph" />
                                            : <h5 className='uiph'>Upload Slide Image</h5>
                                    }
                                </label>
                            </div>
                        </>


                        <>
                            <div className='uploaded-image-previewed' >
                                <label htmlFor='two' >
                                    <img src={pen} alt={'input imge'} style={{
                                        width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                        objectFit: 'contain',
                                        padding: '5px'
                                    }} />
                                    <input name="img_two" id='two' type="file" style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} onChange={setImage} />  {
                                        loading2 ?
                                            <img src={sub.img_two} alt="" className="uiph" />
                                            : <h5 className='uiph'>Upload Slide Image</h5>
                                    }
                                </label>
                            </div>
                        </>

                        <>
                            <div className='uploaded-image-previewed'>
                                <label htmlFor='three' >

                                    <img src={pen} alt={'input imge'} style={{
                                        width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                        objectFit: 'contain',
                                        padding: '5px'
                                    }} />
                                    <input name="img_three" id='three' type="file" style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} onChange={setImage} />  {
                                        loading3 ?
                                            <img src={sub.img_three} alt="" className="uiph" /> :
                                            <h5 className='uiph'>Upload Slide Image</h5>
                                    }
                                </label>
                            </div>
                        </>

                        <>
                            <div className='uploaded-image-previewed' >
                                <label htmlFor='four'>

                                    <img src={pen} alt={'input imge'} style={{
                                        width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                        objectFit: 'contain',
                                        padding: '5px'
                                    }} />
                                    <input name="img_four" id='four' type="file" style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} onChange={setImage} />  {
                                        loading4 ?
                                            <img src={sub.img_four} alt="" className="uiph" /> :
                                            <h5 className='uiph'>Upload Slide Image</h5>
                                    }
                                </label>
                            </div>
                        </>

                    </div>



                    <div className='sectionIIc-next'>
                        <div className='sectionIIc-add-image'>

                            <BsArrowLeft size={20} style={{ cursor: 'pointer' }} />
                            <a href="/admin/sectionI#/admin/sectionI"> Change Banner</a>
                        </div>

                        <Link to="/admin/sectionIII" className='sectionIIc-next-link'>
                            <span> Next  </span>
                            <BsArrowRight size={35} color='blue' />
                        </Link>

                    </div>

                </div>

            </AdminFrame>
        </div>
    )
}


export default SectionIIc