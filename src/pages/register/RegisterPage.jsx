import React from 'react'
import './RegisterPage.css'
import Button from '../../components/button/Button'

function RegisterPage() {
  return (
    <div className='container'>    
        
        <div className='cancel-button'>
            <Button content ='X' style={{width:'50px', borderRadius:'30px' ,height:'40px'}}/>
        </div>

        <div className='register-page'>
        
            <div className='register-page-header'>
                <h2>Signup a new account</h2>
            </div>
            
            <form action="">
                <div className='fullname-input'>           
                    <p>Fullname*</p>
                    <input className='gen-input' name='email'/>               
                </div>


                <div className='email-input'>
                    <p>E-mail*</p>
                    <input className='gen-input' name='email'/>
                </div>


                <div className='password-input'>
                    <p>Paasword*</p>
                    <input className='gen-input' name='email'/>
                </div>


                <div className='confirm-password-input'>
                    <p>Confirm password*</p>
                    <input className='gen-input' name='email'/>
                </div>


                <div className='signup-button'>
                    <Button type= {'submit'} content ='Sign Up' style={{width:'100%', height:'50px', borderRadius:'10px'}}/>
                </div>


                <div className='Have-an-account'>
                    <h3>Have an account? <span>Login</span></h3>
                </div>

            </form>

        </div>
    </div>
  )
}

export default RegisterPage