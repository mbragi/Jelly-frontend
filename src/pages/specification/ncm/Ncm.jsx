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
            let id = findCategoryByName._id
            const req = await fetch(`${BASE_URL}/api/products/category/${id}`)
            const productData = await req.json()
            const products = productData.data
            const product = products.map(item => item.detail)
            setNcm(product)
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
                <img src={data.img_url} alt="product" />
                <div className="flex-content">
                    <p>Type:{data.type}</p>
                    <p>Model:{data.name}</p>
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