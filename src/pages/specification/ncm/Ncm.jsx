import React, { useState, useEffect } from "react";
import './Ncm.css';
import Search from "../Search";
import NavBar from "../../../components/navBar/NavBar";
// import ncm from '../Ncm.json'
// import axios from "axios";
const BASE_URL = 'https://jelly-online-api.herokuapp.com'

function Ncm() {
    const [ncm, setNcm] = useState([]);
    // const [loading, setLoading] = useState(false)
    const search = (e) => {
        let target = e.target.value
        const transformedState = target ? ncm.filter((item) => (
            item.model.toUpperCase().includes(target.toUpperCase())
        )) : ncm
        setNcm([...transformedState])
    }

    async function getData() {
        try {
            const res = await fetch(`${BASE_URL}/api/cat`)
            const data = await res.json()
            const Categories = data.data
            const findCategoryByName = Categories.find(item => item.name === "NCM")
            let id = findCategoryByName._id
            const req = await fetch(`${BASE_URL}/api/products/category/${id}`)
            const productData = await req.json()
            const products = productData.data
            setNcm(products)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div style={{ width: '100%' }}>
            <NavBar />
            <Search onchange={search} />
            <div className="ncm-content">
                {
                    ncm.map((item, idx) => {
                        console.log(item.detail[0])
                        const detail = item.detail[0]
                        return (
                            <ProductSpec key={idx} specification={item} data={detail} />
                        )
                    }).reverse()
                }
            </div>
        </div>
    )
}

export const ProductSpec = ({ data, specification }) => {
    return (
        <>
            <div className="m-content">
                <div>
                    <img src={specification.img} alt="product" />
                </div>
                <div className="flex-content">
                    <p>Type:{specification.name}</p>
                    <p>Model:{specification.category_name}</p>
                    <p>Function:{data.function}</p>
                    <p>Accessories:{data.Accessories}</p>
                    <p>Product Link:{`http://evtop.org/#/details/${specification._id}`}</p>
                    <p>Version:{data.Version}</p>
                </div>
            </div>
        </>
    )
}

export default Ncm;