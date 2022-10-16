// import axios from "axios"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Specification from "./Specification";
import NavBar from '../../components/navBar/NavBar';
import Search from './Search';
import { useNavigate } from "react-router-dom";
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

    return (
        < div style={{ width: '100%' }}>
            <NavBar />
            <Search onchange={navigateSearch} />
            <p>Search By Product Model</p>
            <div className="spec">
                {loading ? <h1>Loading...</h1> :
                    data.map((item, idx) => {
                        // console.log(item)
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