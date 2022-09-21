import React, { useState } from 'react'
import './LoginPage.css'
import Button from '../../components/button/Button'
// import { type } from '@testing-library/user-event/dist/type';

function LoginPage() {
    const BASE_URL = 'https://jelly-online-api.herokuapp.com'
    const [data, setData] = useState({});
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    function getDetails(event) {
        const { name, value } = event.target
        const newData = { ...data };
        newData[name] = value;
        setData(newData);
        console.log(newData)
    }

    async function httpLoginUser(e) {
        e.preventDefault()
        let request = JSON.stringify(data)
        const res = await fetch(`${BASE_URL}/login`, {
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: request
        })
        const resData = await res.json()
        console.log(resData)
        let message = resData.message
        setMessage(message)
        if(type === 'error'){
            console.log(message)
        }
        setType(resData.type)
    }

    return (
        <div className='login-container'>

            <div className='cancel-button'>
                <Button content={'X'} style={{ width: '50px', borderRadius: '30px', height: '40px' }} />
            </div>

            <div className='login-page'>

                <div className='login-page-header'>
                    <h2>Login via E-mail</h2>
                </div>
                <p>{message}</p>
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
                        <Button type={'submit'} content='Log In' style={{ width: '100%', height: '50px', borderRadius: '10px' }} />
                    </div>


                    <div className='forgot-password'>
                        <h3>Forgot password?</h3>
                    </div>

                    <div className='create-new-account'>
                        <h3>Don't have an account? <span>Create New Account</span></h3>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default LoginPage;