import React from 'react'
import './AdminAddProduct.css'
import addproducts from './addproducts.json'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'
import pen from '../../assets/images/pen.png'

function AdminAddProduct() {
    const navigate = useNavigate()

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
                        onClick={() => { navigate("/admin/addproduct") }}
                    />
                </header>

                <section className='admin-add-product-container'>

                    <div className='admin-add-product-images'>
                        <div className='upload-main-image'>
                            <input type="file" id='file' onChange={(e) => { console.log(e.target.files) }} />
                            <label for="file">
                                <img src={pen} alt={'addproduct'} style={{
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
                            {addproducts.map((addproduct, index) => (
                                <React.Fragment key={index}>
                                    <div className='add-sub-product-image'>
                                        <input type="file" id='file' name={addproduct.name} accept='image' onChange={(e) => { console.log(e.target.files) }} />
                                        <label for="file">
                                            <img src={pen} alt={addproduct.img} style={{
                                                width: '40.0px',
                                                height: '30.0px',
                                                float: 'right',
                                                borderRadius: '5px',
                                                backgroundColor: '#FFFFFF',
                                                boxShadow: '0px 0.8718905448913574px 15.694029808044434px 0px #00000040',
                                                objectFit: 'contain',
                                                padding: '5px'
                                            }} />
                                        </label>
                                        <h5 className='usi'>Upload Sub Image</h5>
                                    </div>

                                </React.Fragment>
                            ))}

                        </div>
                    </div>

                    <div className='admin-add-product-details'>
                        <form action="">
                            <div className='pro-cat-pri-qua'>

                                <div className='pn-sc'>
                                    <div className='addproduct-name'>
                                        <h1>PRODUCT NAME</h1>
                                        <input type="text" className='pn-sc-inpt' />

                                    </div>

                                    <div className='select-categories'>
                                        <h1>SELECT CATEGORIES</h1>
                                        <select name="" id="" className='pn-sc-selct'>
                                            <option value="0"></option>
                                            <option value="1">Kesh</option>
                                            <option value="2">Kesh</option>
                                            <option value="3">Kesh</option>
                                        </select>
                                    </div>

                                </div>

                                <div className='pr-qu'>
                                    <div className='price'>
                                        <h1>PRICE ($)</h1>
                                        <input type="text" className='pn-sc-inpt' />
                                    </div>

                                    <div className='quantity'>
                                        <h1>QUANTITY</h1>
                                        <input type="text" className='pn-sc-inpt' />
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
                                <textarea type="text" name="" id="" />

                            </div>

                            <div className='attached-video'>
                                <h1>ATTACHED VIDEO</h1>
                                <div className='att-video'>

                                </div>

                            </div>

                            <Button className='admin-add-btn' content={'Submit'} style={{
                                backgroundColor: ' rgba(53, 112, 236, 0.67)',
                                borderRadius: '8px',
                                width: '180px',
                                height: '60px'
                            }} />

                        </form>
                    </div>
                </section>

            </div>
        </AdminFrame>
    )
}

export default AdminAddProduct