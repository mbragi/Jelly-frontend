import React, { useState, useEffect } from "react";
import './Lfp.css';
import Search from "../Search";
import NavBar from "../../../components/navBar/NavBar";

const BASE_URL = 'https://jelly-online-api.herokuapp.com'
function Ncm() {
    const [lfp, setLfp] = useState([]);
    const search = (e) => {
        let target = e.target.value
        const transformedState = target ? lfp.filter((item) => (
            item.model.toUpperCase().includes(target.toUpperCase())
        )) : lfp
        setLfp([...transformedState])
    }

    async function getData() {
        try {
            const res = await fetch(`${BASE_URL}/api/cat`)
            const data = await res.json()
            const Categories = data.data
            const findCategoryByName = Categories.find(item => item.name === "Life PO4")
            let id = findCategoryByName._id
            const req = await fetch(`${BASE_URL}/api/products/category/${id}`)
            const productData = await req.json()
            const products = productData.data
            const product = products.map(item => item.detail)
            setLfp(product)
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
                    lfp.map((item, idx) => {
                        console.log(lfp)
                        return (
                            <ProductSpecLfp key={idx} item={item} />
                        )
                    })
                }
            </div>
        </div>
    )
}
export const ProductSpecLfp = ({ item }) => {
    return (
        <>
            <div className="m-content" key={item.id}>
                <img src={item.img_url} alt="product" />
                <div className="flex-content">
                    <p>Type:{item.type}</p>
                    <p>Model:{item.model}</p>
                    <p>Function:{item.function}</p>
                    <p>Accessories:{item.Accessories}</p>
                    <p>Product Link:{`http://evtop.org/#/details/${item.Specification}`}</p>
                    <p>Version:{item.Version}</p>
                </div>
            </div>
        </>
    )
}

export default Ncm;