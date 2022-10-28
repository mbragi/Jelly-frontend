import React from 'react'
import './AdminAddProduct.css'
import addproducts from './addproducts.json'
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
    const [counter, setCounter] = useState(0)
    const [message, setMessage] = useState('')
    const [bool, setBool] = useState(false)
    async function httpGetCategories() {
        const request = await axios.get(`${BASE_URL}/api/cat`)
        const response = request.data.data
        setData(response)
        // console.log(data)
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
        const { name } = e.target;
        console.log(e.target.files);
        const url = await uploadFile(e.target.files[0], setCounter);
        let newData = {}
        newData[name] = url;
        setAll(newData)
        console.log(newData)
        setCounter(0)
    }
    function createProduct(e) {
        const { name, value } = e.target
        let newObj = { ...all }
        newObj[name] = value
        console.log(newObj)
        setAll(newObj)
    }
    async function subProduct(e) {
        const { name } = e.target;
        // console.log(e.target.name);
        const url = await uploadFile(e.target.files[0], setCounter);
        let newData = { ...sub }
        newData[name] = url;
        setSub(newData)
        const newObj = { ...all, sub_image: newData }
        setAll(newObj)
        setCounter(0)
    }

    function onCreateDetail(e) {
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
                <form onSubmit={httpCreateProduct} className='admin-add-product-container'>

                    <div className='admin-add-product-images'>
                        <div className='upload-main-image'>
                            <input type="file" id='file' name='img' onChange={createProductIms} />
                            <label htmlFor="file">
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
                            <h1 className='umi'>Upload Main Image</h1>
                        </div>

                        <div className='upload-sub-image'>
                            {addproducts.map((addproduct, index) => {
                                let name = addproduct.name

                                return (
                                    <>
                                        <div className='add-sub-product-image'>
                                            <label >
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
                                                <input name={name} type="file" onChange={subProduct} style={{
                                                    opacity: 0, position: 'absolute', width: '40.0px',
                                                    height: '30.0px',
                                                    float: 'right',
                                                    borderRadius: '5px',
                                                }} />
                                                <h5 className='usi'>Upload Sub Image</h5>
                                            </label>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                        {counter > 0 && <p>Loading...{Math.floor(counter)}%</p>}

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
                                            <option value='0'></option>
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
                                        <span className='add-colours'> Add <Button type={'submit'} content={'+'} style={{ backgroundColor: 'blue', width: '35px', height: '35px', fontSize: '20px' }} />
                                        </span>
                                    </h1>

                                    <div className='available-colors'>
                                        <div className='black'>
                                            <Button type={'submit'} style={{ backgroundColor: 'black', width: '30px', height: '30px' }} />
                                        </div>

                                        <div className='blue'>
                                            <Button type={'submit'} style={{ backgroundColor: 'blue', width: '30px', height: '30px' }} />
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

                            <div className='attached-video' >
                                <h1>ATTACHED VIDEO</h1>
                                <video src={all.video_url || ''} className='att-video'>
                                </video>
                                <button style={{ cursor: 'pointer', background: " rgb(53, 112, 236)", height: '2rem', width: '6rem', float: "right", border: 'none', marginTop: '5px' }}>
                                    <label >
                                        <input name='video_url' type="file" onChange={createProductIms} style={{ opacity: 0, position: 'absolute', width: '1rem' }} />
                                        <span style={{ display: 'flex', alignItems: "center", justifyContent: 'center', width: '100%' }}>
                                            <CloudArrowUp size={18} />
                                            upload
                                        </span>
                                    </label>
                                </button>
                            </div>
                        </div>
                        <Button className='admin-add-btn' content={'Submit'} type="submit" style={{
                            backgroundColor: ' rgba(53, 112, 236, 0.67)',
                            borderRadius: '8px',
                            width: '180px',
                            height: '60px'
                        }}
                        />
                    </div>
                </form>

            </div>
        </AdminFrame>
    )
}

export default AdminAddProduct

// export const SubImage = ({ name }) => {
//     return (

        // <React.Fragment >
        //     <button className='add-sub-product-image'>
        //         <input type="file" name={name} onChange={(e) => { console.log(e.target.name) }} style={{ background: 'red', width: "100%" }} />
        //         <h5 className='usi'>Upload Sub Image</h5>
        //     </button>

        // </React.Fragment >

//     )
// }