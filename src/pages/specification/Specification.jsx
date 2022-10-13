import React from 'react';
import NavBar from '../../components/navBar/NavBar';
import './Specification.css';
import { RiFile3Fill } from "react-icons/ri"
import Search from './Search';
import { Link, useNavigate } from "react-router-dom";

function Specification({ name }) {
    const navigate = useNavigate();
    const navigateSearch = (e) => {
        let target = e.target.value;
        let ncmValue = 'ncm';
        let lfp = "lfp"
        if (target.toLowerCase().includes(ncmValue.toLowerCase())) {
            navigate('/product/ncm')
        }
        else if (target.toLowerCase().includes(lfp.toLowerCase())) {
            navigate('/product/lfp');
        }
    }
    return (
        <div className="spec">
            <NavBar />
            <Search onchange={navigateSearch} />
            <p>Search By Product Model</p>
            <div className="files">
                <Link to='/product/lfp'>
                    <div className="text">
                        <h1>{name}</h1>
                        <RiFile3Fill size={260} style={{ color: '#e85d04' }} className='relativespec' />
                    </div>
                </Link>
                <Link to='/product/ncm'>
                    <div className="text">
                        <h1 style={{ margin: '120px 90px 0' }}>{name}</h1>
                        <RiFile3Fill size={260} style={{ color: '#06d6a0' }} className='relativespec' />
                    </div>
                </Link>
                <div className="text">
                    <h1 style={{ margin: '120px 90px 0' }}>{name}</h1>
                    <RiFile3Fill size={260} style={{ color: ' #118ab2' }} className='relativespec' />
                </div>
            </div>
        </div>
    )
}

export default Specification;