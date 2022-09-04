import React from 'react'
import './LoginPage.css'
import Button from '../../components/button/Button'

function LoginPage() {
    return (
        <div className='login-container'>

            <div className='cancel-button'>
                <Button content={'X'} style={{ width: '50px', borderRadius: '30px', height: '40px' }} />
            </div>

            <div className='login-page'>

                <div className='login-page-header'>
                    <h2>Login via E-mail</h2>
                </div>

                <form action="" className='login-page-form'>
                    <div className='email-input'>
                        <p>E-mail*</p>
                        <input className='gen-input' name='email' />
                    </div>

                    <div className='password-input'>
                        <p>Password*</p>
                        <input className='gen-input' name='password' />
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