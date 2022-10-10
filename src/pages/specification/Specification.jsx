import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import './Specification.css';
import { FaSearch } from "react-icons/fa"
import { RiFile3Fill } from "react-icons/ri"

function Specification(){
    return(
        <div className="spec">
            <NavBar />
            <div className="search">
                <input type="text" />
                <FaSearch size={20}/>
            </div>
            <div className="files">
               <div className="text">
                    <h1>LiFeP04</h1>
                    <RiFile3Fill size={240} style = {{color: '#e85d04'}} className = 'relativespec' />     
               </div>
               <div className="text">
                    <h1 style = {{ margin: '100px 85px 0'}}>NCM</h1>
                    <RiFile3Fill size={240} style = {{color: '#06d6a0'}} className = 'relativespec' />  
               </div>
               <div className="text">
                    <h1 style = {{ margin: '100px 85px 0'}}>APP</h1>
                    <RiFile3Fill size={240} style = {{color: ' #118ab2'}} className = 'relativespec' />
               </div>
            </div>
        </div>
    )
}

export default Specification;