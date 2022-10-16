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
            // console.log(products)
            // const product = products.map((item, idx) => {
            //     const newArr = item.detail
            //     return (
            setNcm(products)
            //     )
            // }
            // )
            // setData(products)
            // setLoading(product)
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
                        // console.log(item.detail[0])
                        const detail = item.detail[0]
                        return (
                            <ProductSpec key={idx} data={detail} />
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
                <img src={data.photo_url} alt="product" />
                <div className="flex-content">
                    <p>Type:{data.type}</p>
                    <p>Model:{data.model}</p>
                    <p>Function:{data.function}</p>
                    <p>Accessories:{data.Accessories}</p>
                    <p>Product Link:{`http://evtop.org/#/details/${data.Specification}`}</p>
                    <p>Version:{data.Version}</p>
                </div>
            </div>
        </>
    )
}

export default Ncm;