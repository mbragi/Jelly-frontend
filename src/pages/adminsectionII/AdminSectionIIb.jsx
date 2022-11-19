import React from 'react'
import './AdminSectionIIb.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import pen from '../../assets/images/pen.png'
import {BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp, X } from 'phosphor-react';

function SectionIIb() {
  return (
    <div>
           <AdminFrame currentPage='sectionIIb'>
                <div className='sectionIIb'>
                    <header className='sectionIIb-header'>
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

                    <section className='sectionIIb-container'>
                        <div className='sectionIIb-add-image'>
                            <X size={50} color={'white'} style={{backgroundColor:'black', borderRadius:'100%', padding:'10px '}} />
                               
                        </div>

                        <div className='upload-Sub-image-sectionIIb'>

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
                                <h1 className='umi-secb'>Upload Sub <br /> Image</h1>
                            }
                        </div>


                    </section>

                    <div className='sectionIIb-next'>
                        <p> Next</p>
                        <BsArrowRight size={30} />
                    </div>

                </div>

            </AdminFrame>
    </div>
  )
}

export default SectionIIb