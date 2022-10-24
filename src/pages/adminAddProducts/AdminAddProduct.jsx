import React from 'react'
import './AdminAddProduct.css'
import  addproducts from './addproducts.json'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import Button from '../../components/button/Button'
import logo from '../../assets/images/logo.png'
import name from '../../assets/name.png'

function AdminAddProduct() {
  return (
    <div className='admin-add-product'>
         <AdminFrame currentPage={'products'}/>
        
        <header className='admin-add-product-header'>
            <h1>Add Product</h1>
            <Button  className='admin-add-btn' content={'Product Lists'} style ={{
                backgroundColor: ' rgba(53, 112, 236, 0.67)',
                borderRadius: '8px',
                width:'180px',
                height:'60px'
            }} />
        </header>

        <section className='admin-add-product-container'>
   

            <div className='admin-add-product-images'>
                <div className='upload-main-image'>
                    <img src={logo} alt="" />
                </div>

                <div className='upload-sub-image'>
                    {
                        addproducts.map((addproduct, index) => (
                            <React.Fragment key={index}>             
                                <div className='add-sub-product-image'>
                                <img src={name} alt={addproduct.img} />
                                </div>                        
                        
                            </React.Fragment>
                        ))
                    }
                    
                </div>
            </div>

            <div className='admin-add-product-details'>
                <form action="">
                    <div className='pro-cat-pri-qua'>
                
                        <div className='pn-sc'>
                            <div className='product-name'>
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
                                <h1>PRICE ()</h1>
                                <select name="" id="" className='pr-qu-selct'>
                                    <option value="0"></option>
                                    <option value="1">Kesh</option>
                                    <option value="2">Kesh</option>
                                    <option value="3">Kesh</option>
                                </select>

                            </div>

                            <div className='quantity'>
                                <h1>QUANTITY</h1>
                                <select name="" id=""  className='pr-qu-selct'>
                                    <option value="0"></option>
                                    <option value="1">Kesh</option>
                                    <option value="2">Kesh</option>
                                    <option value="3">Kesh</option>
                                </select>
                            </div>

                        </div>

                    </div>

                    <div className='dif-colours'>
                        <div className='diff-colours'>
                            <h1>COLOURS 
                                <span className='add-colours'> Add <Button type={'submit'} content={'+'} style={{backgroundColor:'blue', width:'30px', height:'30px'}} />
                                </span> 
                            </h1>

                            <div className='available-colors'>
                                <div className='black'>
                                    <Button type={'submit'} style={{backgroundColor:'black', width:'30px', height:'30px'}} />
                                </div>

                                <div className='blue'>
                                    <Button type={'submit'}  style={{backgroundColor:'blue', width:'30px', height:'30px'}} />
                                </div>
                            </div>
                        </div>

                        {/* <div className='add-colours'>
                            <h1>Add </h1>   <Button type={'submit'} content={'+'} style={{backgroundColor:'blue', width:'30px', height:'30px'}} />
                        
                        </div> */}
                    </div>


                    <div className='full-details'>
                        <h1>FULL DETAILS</h1>
                        <textarea type="text" name="" id="" />

                    </div>

                    <div className='attached-video'>
                        <h1>ATTACHED VIDEO</h1>
                        <textarea type="text" />

                    </div>

                    <Button className='admin-add-btn' content={'Submit'} style ={{
                        backgroundColor: ' rgba(53, 112, 236, 0.67)',
                        borderRadius: '8px',
                        width:'180px',
                        height:'60px'
                    }} />
                    
                </form>
            </div>
        </section >  

    </div>
  )
}

export default AdminAddProduct