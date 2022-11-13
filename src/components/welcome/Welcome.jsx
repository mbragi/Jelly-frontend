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
                        <MdCancel className='welcome-cancel' size={30} id= "sign_welcome" onClick={closeWelcome}/>
                    </span>
                    <img src={animate} alt="welcome" />
                </div>
            </div>
        </div>
    )
}

export default Welcome