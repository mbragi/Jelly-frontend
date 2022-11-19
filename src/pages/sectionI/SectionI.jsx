import React from 'react'
import './SectionI.css'
import AdminFrame from '../../components/adminFrame/AdminFrame';
import pen from '../../assets/images/pen.png'
import { BsArrowRight } from 'react-icons/bs';
import { CloudArrowUp } from 'phosphor-react';


function SectionI() {
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
                        }}>

                        <label id='label'>
                            <input type="file" style={{
                                width: '1rem'
                            }} />

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
                    <div className='upload-main-image-sectionI'>
                        <input id='filez' type="file" name='img' />
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
                            <h1 className='umi-sec'>Upload Main <br /> Image</h1>
                        }
                    </div>


                </section>

                <div className='sectionI-next'>
                    <p > Next</p>
                    <BsArrowRight size={30} />
                </div>

            </div>

        </AdminFrame>

    )
}

export default SectionI