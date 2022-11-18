// import axios from "axios"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Specification from "./Specification";
import NavBar from '../../components/navBar/NavBar';
import Search from './Search';
import './Specification.css'
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import LoginPage from "../login/LoginPage";
import RegisterPage from "../register/RegisterPage";
const BASE_URL = 'https://jelly-online-api.herokuapp.com'

// const BASE_UR = 'http://localhost:1050'

function SpecHead() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        async function getData() {
            try {
                const res = await fetch(`${BASE_URL}/api/cat`)
                const data = await res.json()

                const Categories = data.data
                // console.log(Categories)
                setData(Categories)
                setLoading(false)
            } catch (error) {
                console.log(error.message)
            }
        }
        getData()
    }, [])
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

    const {isLogin, switchpop} = useGlobalContext();
    return (
        < div style={{ width: '100%' }}>
            <NavBar />
            {isLogin ? !switchpop ? <LoginPage /> : <RegisterPage /> : null}
            <Search onchange={navigateSearch} />
            <p>Search By Product Model</p>
            <div className="spec" >
                {loading ? <h1>Loading...</h1> :
                    data.map((item, idx) => {
                        console.log(data)
                        return (
                            <Specification key={idx} name={item} />
                        )
                    })

                }
            </div>
        </div >
    )
}

export default SpecHead;