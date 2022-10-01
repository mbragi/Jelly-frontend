import React, {useState} from 'react'
import './ForgotPassword.css';
import { BsArrowLeft } from 'react-icons/bs';
import Button from '../../components/button/Button';

function ForgotPassword() {

        const [data, setData] = useState({});
          
        function forgottenPassword(event) {
            const { name, value } = event.target
            const newData = { ...data };
            newData[name] = value;
            setData(newData);
            console.log(newData)
        }
    
  return (
    <div className='forgot-password-container'>

        <div className='cancel-button'>
            <Button content={'X'} style={{ width: '50px', borderRadius: '30px', height: '40px' }} />
        </div>

        <div className='forgot-password-page'>
            <div className='forgot-password-header'>
                <h2>Forgot Password?</h2>
            </div>
          
            <form className='forgot-password-form' >
                <div className='email-input'>
                    <p>E-mail*</p>
                    <input className='gen-input' onChange={forgottenPassword} name='email' />
                </div>

                <div className='forgot-password-button'>
                    <Button type={'submit'} content='Reset Password' style={{ width: '100%', height: '50px', borderRadius: '10px' }} />
                </div>

                <div className='go-back'>
                    <BsArrowLeft size={30} />
                    <span>Go back</span>
                </div>
          
            </form>

        </div>

    </div>
  )
}

export default ForgotPassword