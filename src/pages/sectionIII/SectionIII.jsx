import React from 'react'
import './SectionIII.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
// import Button from '../../components/button/Button'
// import pen from '../../assets/images/pen.png'
import {BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp } from 'phosphor-react';

function SectionIII() {
  return (
    <div>
           <AdminFrame currentPage='sectionIII'>
            <div className='sectionIII'>
                <header className='sectionIII-header'>
                    <h1>Section III</h1>

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

                <section className='sectionIII-container'>
                    <div className='advert-details-sectionIII'>
                        <h1 className='adv-det'>ADVERTISING DETAILS</h1>
                        <textarea  id="message-input" name="message" cols="100" rows="10" ></textarea>
                    </div>

                    <button type='file' 
                        style={{ 
                            cursor: 'pointer', 
                            background: " rgb(53, 112, 236)", 
                            height: '3.5rem', 
                            width: '13rem', 
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
                                <CloudArrowUp size={18} />  Select Product
                            </span>
                        </label>

                    </button>

                </section>

                <div className='sectionIII-next'>
                    <p> Next</p>
                    <BsArrowRight size={30} />
                </div>
            </div>

        </AdminFrame>
    </div>
  )
}

export default SectionIII