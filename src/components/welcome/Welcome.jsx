import React from 'react';
import './Welcome.css';
import animate from '../../assets/animated-welcome-gif-8.gif'
import { MdCancel } from "react-icons/md"; 
import {useGlobalContext} from '../../context';
function Welcome(){
    const {setIsSignUp} = useGlobalContext()
    const closeWelcome = () => {
        setIsSignUp(false)
    }
    return(
        <div className="overlay">
            <div className='welcome-div'>
                <div className='welcome-sub'>
                    <span>
                        <span className='welcome-cancel' id= "sign_welcome" onClick={closeWelcome}><MdCancel size={30} /></span>
                    </span>
                    <img src={animate} alt="welcome" />
                </div>
            </div>
        </div>
    )
}

export default Welcome