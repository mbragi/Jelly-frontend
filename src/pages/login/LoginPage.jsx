import React, { useState } from 'react'
import './LoginPage.css'
import Button from '../../components/button/Button'
import { useGlobalContext } from '../../context'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// import { type } from '@testing-library/user-event/dist/type';

function LoginPage() {

    const BASE_URL = 'https://evtop-api.herokuapp.com'
    const [data, setData] = useState({});
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const { setIsLogin, setSwitch, setLoginCart } = useGlobalContext();
    function getDetails(event) {
        const { name, value } = event.target
        const newData = { ...data };
        newData[name] = value;
        setData(newData);
        // console.log(newData)
    }

    async function httpLoginUser(e) {
        e.preventDefault()
        setLoading(!loading)
        const request = await axios.post(`${BASE_URL}/api/auth/login`, data)
        const res = request.data.data
        localStorage.setItem("userData", JSON.stringify(res))
        localStorage.setItem('auth', JSON.stringify({ token: true }))
        let message = request.data.message
        setMessage(message)
        setLoading(true)
        if (res.isAdmin === false) {
            setLoginCart(res)
        } else {
            navigate('/admin')
        }
        console.log(message)
        setLoading(false)
    }
    return (
        <div className='overlay'>

            <div className='login-container'>

                <div className='cancel-button'>
                    <Button content={'X'} style={{ width: '60px', borderRadius: '30px', height: '50px', }} onClick={() => setIsLogin(false)} />
                </div>

                <div className='login-page'>

                    <div className='login-page-header'>
                        <h2>Login via E-mail</h2>
                    </div>
                    <p style={{ color: 'green', fontSize: '2rem' }} >{message}</p>
                    <form onSubmit={httpLoginUser} className='login-page-form' >
                        <div className='email-input'>
                            <p>E-mail*</p>
                            <input className='gen-input' onChange={getDetails} name='email' />
                        </div>

                        <div className='password-input'>
                            <p>Password*</p>
                            <input className='gen-input' onChange={getDetails} name='password' />
                        </div>


                        <div className='login-button'>
                            <Button type={'submit'} content={loading ? "Processing..." : 'Log In'} style={{ width: '100%', height: '50px', borderRadius: '10px' }} />
                        </div>


                        <div className='forgot-password'>
                            <h3>Forgot password?</h3>
                        </div>

                        <div className='create-new-account'>
                            <h3>Don't have an account? <span onClick={() => setSwitch(true)} style={{ cursor: 'pointer' }} >Create New Account</span></h3>
                        </div>

                    </form>

                </div>

            </div>
        </div>
    )
}

export default LoginPage;