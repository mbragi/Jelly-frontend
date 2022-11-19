import React from 'react'

import './SectionIIc.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import pen from '../../assets/images/pen.png'
import {BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp, Plus } from 'phosphor-react';
import { Link } from 'react-router-dom';


function SectionIIc() {

    
  return (
         <div>
           <AdminFrame currentPage='sectionIIc'>
                <div className='sectionIIc'>
                    <header className='sectionIIc-header'>
                        <h1>Section II</h1>

                        <button type='file' 
                            style={{ 
                                cursor: 'pointer', 
                                background: " rgb(53, 112, 236)", 
                                height: '3.5rem', 
                                width: '13rem', 
                                float: "right", 
                                border: 'none',
                                color: 'white',
                                borderRadius:'15px'
                            }}>

                            <label id='label'>
                                <input  type="file" style={{  
                                    width: '1rem' 
                                }} />

                                <span style={{
                                    display: 'flex',
                                    gap:'5px', 
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
                        <div className='sectionIIc-add-image'>
                               
                                <Plus size={20} style= {{cursor:'pointer'}}/>
                                <p> Add Image</p>
                        </div>

                        <div className='upload-main-image-sectionIIc'>

                            <input id='filezz' type="file" name='img' />
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
                            </label>
                            {
                                <h1 className='umi-secc'>Upload Main <br /> Image</h1>
                            }
                        </div>

                    </section>

                    <div className='uploaded-image-previewed-here'>
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
                                    <input name="option_one" id='one' type="file"  style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} />  {
                                        
                                        <h5 className='uiph'>Uploaded image is previewed here</h5>
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
                                    <input name="option_two" id='two' type="file" style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} />  {
                                        
                                        <h5 className='uiph'>Uploaded image is previewed here</h5>
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
                                    <input name="option_three" id='three' type="file"style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} />  {
                                        
                                        <h5 className='uiph'>Uploaded image is previewed here</h5>
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
                                    <input name="option_four" id='four' type="file"  style={{
                                        opacity: 0, position: 'absolute', width: '40.0px',
                                        height: '30.0px',
                                        float: 'right',
                                        borderRadius: '5px',
                                    }} />  {
                                        
                                        
                                        <h5 className='uiph'>Uploaded image is previewed here</h5>
                                    }
                                </label>
                            </div>
                        </> 

                    </div>

                   

                    <div className='sectionIIc-next'>

                    <Link to="/sectionIII" className='sectionIIc-next-link'>
                        <span> Next  </span>
                        <BsArrowRight size={35} color='blue'/>
                    </Link>

                    </div>

                </div>

            </AdminFrame>
        </div>
    )
}


export default SectionIIc