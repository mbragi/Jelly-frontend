import React, { useState } from 'react'
import './RegisterPage.css'
import Button from '../../components/button/Button'
// import { useNavigate } from 'react-router-dom';

function RegisterPage() {
    const BASE_URL = 'https://jelly-online-api.herokuapp.com'
    const [data, setData] = useState({});
    const [resData, setResData] = useState({})
    const [message, setMessage] = useState('')
    // const [type, setType] = useState('')
    // const navigate = useNavigate()

    function sendDetails(event) {
        const { name, value } = event.target
        const newData = { ...data }
        newData[name] = value;
        setData(newData);
    }
    async function httpRegisterUser(e) {
        e.preventDefault();
        let request = data         // console.log(request);
        let response = await fetch(`${BASE_URL}/register`, {
            method: "post",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(request)

        }).catch(err => { console.log(err.message) })
        const allData = await response.json()
        console.log(allData)
        setResData(allData)
        const message = resData.message

        setType(resData.type)

        setMessage(message)
        // if (type === 'error') {
        // return console.log(message)
        // } else if (type === 'success') {
        // console.log('success')
        // setTimeout(() => {
        // navigate('/')
        // }, 1500)
        // }
    }

    return (
        <div className='register-container'>

            <div className='cancel-button'>
                <Button content='X' style={{ width: '50px', borderRadius: '30px', height: '40px' }} />
            </div>

            <div className='register-page'>

                <div className='register-page-header'>
                    <h2>Signup a new account</h2>
                </div>

                <form onSubmit={httpRegisterUser} className='register-page-form'>
                    <div className='fullname-input'>
                        <p>FullName*</p>
                        <input className='gen-input' onChange={sendDetails} name='fullName' />
                    </div>


                    <div className='email-input'>
                        <p>E-mail*</p>
                        <input className='gen-input' onChange={sendDetails} name='email' />
                    </div>


                    <div className='password-input'>
                        <p>Password*</p>
                        <input className='gen-input' onChange={sendDetails} name='password' />
                    </div>


                    <div className='confirm-password-input'>
                        <p>Confirm password*</p>
                        <input className='gen-input' onChange={sendDetails} name='confirmPassword' />
                    </div>


                    <div className='signup-button'>
                        <Button type={'submit'} content='Sign Up' style={{ width: '100%', height: '50px', borderRadius: '10px' }} />
                    </div>


                    <div className='Have-an-account'>
                        <p>{message}</p>
                        <h3>Have an account? <span>Login</span></h3>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default RegisterPage
