import React, { useState, useEffect } from "react";
import './Ncm.css';
import Search from "../Search";
import NavBar from "../../../components/navBar/NavBar";
// import ncm from '../Ncm.json'
// import axios from "axios";
const BASE_URL = 'https://jelly-online-api.herokuapp.com'

function Ncm() {
    const [ncm, setNcm] = useState([]);
    // const [data, setData] = useState([])
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
            let request = { model: findCategoryByName.name }
            const req = await fetch(`${BASE_URL}/api/product/detail`, {
                method: 'post',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify(request)
            })
            const productData = await req.json()
            // console.log(productData)
            const products = productData.data
            // const product = products.map(item => item.detail)
            setNcm(products)
            // setData(products)
            // setLoading(false)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <NavBar />
            <Search onchange={search} />
            <div className="ncm-content">
                {
                    ncm.map((item, idx) => {
                        console.log(ncm)
                        return (
                            <ProductSpec key={idx} data={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export const ProductSpec = ({ data }) => {
    return (
        <>
            <div className="m-content">
                <img src='' alt="product" />
                <div className="flex-content">
                    <p>{data.type}</p>
                    <p>{data.name}</p>
                    <p>{data.function}</p>
                    <p>{data.Accessories}</p>
                    <p>http://evtop.org/#/details/{data.Specification}</p>
                    <p>{data.Version}</p>
                </div>
            </div>
        </>
    )
}

export default Ncm;