import React from 'react'
import './AdminAddProduct.css'
// import addproducts from './addproducts.json'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import pen from '../../assets/images/pen.png'
import { useEffect, useState } from 'react';
import axios from "axios"
import { CloudArrowUp } from 'phosphor-react';
import { uploadFile } from '../../utils/cloudinary';
const BASE_URL = 'https://jelly-online-api.herokuapp.com'


function AdminAddProduct() {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [create, setCreate] = useState({})
    const [sub, setSub] = useState({})
    const [all, setAll] = useState({})
    // const [image, setImage] = useState('')
    const [counter, setCounter] = useState(0)
    const [message, setMessage] = useState('')
    const [bool, setBool] = useState(false)
    const [bool2, setBool2] = useState(false)
    const [bool3, setBool3] = useState(false)
    const [bool4, setBool4] = useState(false)
    const [bool5, setBool5] = useState(false)
    const [bool6, setBool6] = useState(false)
    const [vid, setVid] = useState(false)
    async function httpGetCategories() {
        const request = await axios.get(`${BASE_URL}/api/cat`)
        const response = request.data.data
        setData(response)
    }
    async function httpCreateProduct(e) {
        e.preventDefault()
        console.log(all)
        const request = await axios.post(`${BASE_URL}/api/create/product`, all)
        const res = request.data.message
        console.log(res)
        setMessage(res)
        setBool(!bool)
        setTimeout(() => {
            setBool(!bool)
        }, 1000)
    }
    async function createProductIms(e) {
        e.preventDefault()
        const { name } = e.target;
        console.log(e.target.files);
        const url = await uploadFile(e.target.files[0], setCounter);
        let newData = { ...all }
        newData[name] = url;
        setAll(newData)
        setVid(!vid)
        setCounter(0)
    }
    async function createProductVid(e) {
        e.preventDefault()
        const { name } = e.target;
        // console.log(name);
        const url = await uploadFile(e.target.files[0], setCounter);
        let newData = { ...all }
        newData[name] = url;
        setAll(newData)
        setCounter(0)
    }
    function createProduct(e) {
        e.preventDefault()
        const { name, value } = e.target
        let newObj = { ...all }
        newObj[name] = value
        console.log(newObj)
        setAll(newObj)
    }
    async function subProduct(e) {
        e.preventDefault()
        const { name } = e.target;
        const url = await uploadFile(e.target.files[0], setCounter);
        let newData = { ...sub }
        newData[name] = url;
        setSub(newData)
        const newObj = { ...all, sub_image: newData }
        setAll(newObj)
        setCounter(0)
        if (sub.option_one) {
            setBool(true)
        } else if (sub.option_two) {
            setBool2(true)
        } else if (sub.option_three) {
            setBool3(true)
        } else if (sub.option_four) {
            setBool4(true)
        } else if (sub.option_five) {
            setBool5(true)
        } else if (sub.option_six) {
            setBool6(true)
        }
    }

    function onCreateDetail(e) {
        e.preventDefault()
        // console.log(e.target.value)
        const { name, value } = e.target
        let newObj = { ...create }
        newObj[name] = value
        setCreate(newObj)
        const newData = { ...all, detail: newObj }
        setAll(newData)
        console.log(all)

    }
    useEffect(() => {
        httpGetCategories()
    }, [])
    return (
        <AdminFrame currentPage='admin-add-product'>
            <div className='admin-add-product'>
                <header className='admin-add-product-header'>
                    <h1>Add Product</h1>
                    <Button className='admin-add-btn' content={'Product Lists'} style={{
                        backgroundColor: ' rgba(53, 112, 236, 0.67)',
                        borderRadius: '8px',
                        width: '180px',
                        height: '60px'
                    }}
                        onClick={() => { navigate("/admin/products") }}
                    />
                </header>
                {
                    bool &&
                    <div>
                        <p style={{ width: '100%', height: '3rem', lineHeight: '2rem' }}>{message}</p>
                    </div>
                }
                <section className='admin-add-product-container' style={{ flexDirection: "column" }}>
                    <div className='admin-add-product-container'>
                        <div className='admin-add-product-images'>

                            {counter > 0 && <p>Loading...{Math.floor(counter)}%</p>}
                            <div className='upload-main-image'>

                                <input id='main' type="file" name='img' onChange={createProductIms} />
                                <label htmlFor="main">
                                    <img src={pen} alt="product" style={{
                                        width: '50px',
                                        height: '40px',
                                        float: 'right',
                                        borderRadius: '5px',
                                        backgroundColor: '#FFFFFF',
                                        boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                        objectFit: 'contain',
                                        padding: '5px',
                                        zIndex:'2'
                                    }} />
                                </label>
                                {
                                    vid ?
                                        <>
                                            <img src={all.img} alt="" className="umi-img" style={{width:'100%', height:'90%'}}/>
                                        </> :
                                        <h1 className='umi'>Upload Main Image</h1>
                                }
                            </div>
                            {/* upload sub images */}

                            <div className='upload-sub-image'>
                                <>
                                    <div className='add-sub-product-image' >
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
                                            <input name="option_one" id='one' type="file" onChange={subProduct} style={{
                                                opacity: 0, position: 'absolute', width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                            }} />  {
                                                bool ?
                                                    <>
                                                        <img src={sub.option_one || ""} alt="" className="usi" />
                                                    </> :
                                                    <h5 className='usih1'>Upload Sub Image</h5>
                                            }
                                        </label>
                                    </div>
                                </>
                                <>
                                    <div className='add-sub-product-image' >
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
                                            <input name="option_two" id='two' type="file" onChange={subProduct} style={{
                                                opacity: 0, position: 'absolute', width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                            }} />  {
                                                bool2 ?
                                                    <>
                                                        <img src={sub.option_two || ""} alt="" className="usi" />
                                                    </> :
                                                    <h5 className='usih1'>Upload Sub Image</h5>
                                            }
                                        </label>
                                    </div>
                                </> <>
                                    <div className='add-sub-product-image' >
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
                                            <input name="option_three" id='three' type="file" onChange={subProduct} style={{
                                                opacity: 0, position: 'absolute', width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                            }} />  {
                                                bool3 ?
                                                    <>
                                                        <img src={sub.option_three || ""} alt="" className="usi" />
                                                    </> :
                                                    <h5 className='usih1'>Upload Sub Image</h5>
                                            }
                                        </label>
                                    </div>
                                </> <>
                                    <div className='add-sub-product-image' >
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
                                            <input name="option_four" id='four' type="file" onChange={subProduct} style={{
                                                opacity: 0, position: 'absolute', width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                            }} />  {
                                                bool4 ?
                                                    <>
                                                        <img src={sub.option_four || ""} alt="" className="usi" />
                                                    </> :
                                                    <h5 className='usih1'>Upload Sub Image</h5>
                                            }
                                        </label>
                                    </div>
                                </> <>
                                    <div className='add-sub-product-image' >
                                        <label htmlFor='five' >

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
                                            <input id='five' name="option_five" type="file" onChange={subProduct} style={{
                                                opacity: 0, position: 'absolute', width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                            }} />  {
                                                bool5 ?
                                                    <>
                                                        <img src={sub.option_five || ""} alt="" className="usi" />
                                                    </> :
                                                    <h5 className='usih1'>Upload Sub Image</h5>
                                            }
                                        </label>
                                    </div>
                                </> <>
                                    <div className='add-sub-product-image' >
                                        <label htmlFor='six'>

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
                                            <input id='six' name="option_six" type="file" onChange={subProduct} style={{
                                                opacity: 0, position: 'absolute', width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                            }} />  {
                                                bool6 ?
                                                    <>
                                                        <img src={sub.option_six || ""} alt="" className="usi" />
                                                    </> :
                                                    <h5 className='usih1'>Upload Sub Image</h5>
                                            }
                                        </label>
                                    </div>
                                </>

                            </div>
                            {/* upload video */}
                            <Video onChange={createProductVid} url={all.video_url} />


                        </div>

                        <div className='admin-add-product-details'>
                            <div>
                                <div className='pro-cat-pri-qua'>

                                    <div className='pn-sc'>
                                        <div className='addproduct-name'>
                                            <h1>PRODUCT NAME</h1>
                                            <input type="text" name='name' className='pn-sc-inpt' onChange={createProduct} />

                                        </div>

                                        <div className='select-categories'>
                                            <h1>SELECT CATEGORIES</h1>

                                            <select name="category_id" className='pn-sc-selct' onChange={createProduct} >
                                                <option value='0'>SELECT A CATEGORY</option>
                                                {data.map((item, idx) =>
                                                    <option value={item._id} key={idx}>{item.name}</option>
                                                )}
                                            </select>
                                        </div>

                                    </div>

                                    <div className='pr-qu'>
                                        <div className='price'>
                                            <h1>PRICE ($)</h1>
                                            <input type="text" name=" price" className='pn-sc-inpt' onChange={createProduct} />
                                        </div>

                                        <div className='quantity'>
                                            <h1>QUANTITY</h1>
                                            <input type="text" name="available_quantity" className='pn-sc-inpt' onChange={createProduct} />
                                        </div>

                                    </div>

                                </div>

                                <div className='dif-colours'>
                                    <div className='diff-colours'>
                                        <h1>COLOURS
                                            <span className='add-colours'> Add <Button className="add-color-btn" type={'submit'} content={'+'} 
                                            style={{  
                                            width: '30px', 
                                            height: '30px', 
                                            fontSize:'1.4rem', 
                                            borderRadius:"100%", 
                                            cursor:'pointer', 
                                            padding:"0",
                                            boxShadow:'none',
                                            backgroundColor:"rgba(53, 112, 236, 0.67)", 
                                            color:"white" }}  />
                                            </span>
                                        </h1>

                                        <div className='available-colors'>
                                            <div className='black'>
                                                <button type={'submit'} style={{ backgroundColor: 'black', width: '30px', height: '30px' }} />
                                            </div>

                                            <div className='blue'>
                                                <button type={'submit'} style={{ backgroundColor: 'blue', width: '30px', height: '30px' }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>


                                <div className='full-details'>
                                    <h1>FULL DETAILS</h1>
                                    <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', justifyContent: "space-evenly" }}>

                                        <div className='quantity'>
                                            <h1>key Features</h1>
                                            <input type="text" name='key_features' className='pn-sc-inpt' onChange={onCreateDetail} />
                                        </div>
                                        <div className='quantity'>
                                            <h1>Model</h1>
                                            <input type="text" name='model' className='pn-sc-inpt' onChange={onCreateDetail} />
                                        </div>
                                        <div className='quantity'>
                                            <h1>Specifications</h1>
                                            <input type="text" name='specification' className='pn-sc-inpt' onChange={onCreateDetail} />
                                        </div>
                                        <div className='quantity'>
                                            <h1>Version</h1>
                                            <input type="text" name='version' className='pn-sc-inpt' onChange={onCreateDetail} />
                                        </div>
                                        {/* <div className='quantity'>
                                        <button className='pn-sc-input'>
                                            <input type="file" className='pn-sc-inpt' />
                                            ATTACH PDF
                                        </button>
                                    </div> */}
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                        <Button className='admin-add-btn' content={'Submit'} type="submit" style={{
                            backgroundColor: ' rgba(53, 112, 236, 0.67)',
                            borderRadius: '8px',
                            width: '200px',
                            height: '60px'
                        }}
                            onClick={httpCreateProduct}
                        />
                    </div>
                </section>

            </div>
        </AdminFrame>
    )
}

export default AdminAddProduct

export const Video = ({ onChange, url }) => {
    return (
        <div className='attached-video' >
            <h1>ATTACHED VIDEO</h1>
            <video src={url || ''} autoPlay className='att-video' controls style={{width:'100%', backgroundColor:'black'}}>
            </video>

            <button type='file' style={{ cursor: 'pointer', background: " rgb(53, 112, 236)", height: '2rem', width: '6rem', float: "right", border: 'none', marginTop: '5px' }}>
                <label id='label'>
                    <input name='video_url' type="file" onChange={onChange} style={{ opacity: 0, position: 'absolute', width: '1rem' }} />
                    <span style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: '100%' }}>
                        <CloudArrowUp size={18} />
                        upload
                    </span>
                </label>
            </button>
        </div>
    )
}