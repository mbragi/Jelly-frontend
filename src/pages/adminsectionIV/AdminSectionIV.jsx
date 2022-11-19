import React from 'react'
import './AdminSectionIV.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
// import Button from '../../components/button/Button'
// import pen from '../../assets/images/pen.png'
import {BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp } from 'phosphor-react';
import { Link } from 'react-router-dom';



function sectionIV() {
  return (
    <div>
          <AdminFrame currentPage='sectionIV'>
            <div className='sectionIV'>
                <header className='sectionIV-header'>
                    <h1>Section IV</h1>

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

                <section className='sectionIV-container'>
                    <div className='search-sectionIV'>
                        <p>Select:</p>
                        <select name="" id="">
                            <option value="0">Kesh</option>
                        </select>
                    </div>
                    
                    <div className='about-details-sectionIV'>
                        <h1 className='adv-det'>ABOUT DETAILS</h1>
                        <textarea  id="message-input" name="message" cols="100" rows="10" ></textarea>
                    </div>

                </section>

                <div className='sectionIV-next'>
                    <Link to="/admin/sectionI" className='sectionIV-next-link'>
                        <span> Next  </span>
                        <BsArrowRight size={35} color='blue'/>
                    </Link>
                </div>

            </div>

        </AdminFrame>
    </div>
  )
}

export default sectionIV