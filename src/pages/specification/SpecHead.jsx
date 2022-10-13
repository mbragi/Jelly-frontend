import axios from "axios"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Specification from "./Specification";
const BASE_URL = 'https://jelly-online-api.herokuapp.com/api'

function SpecHead() {
    const [data, setData] = useState([])
    const getData = () => async function () {
        const res = await axios.get(`${BASE_URL}/category`)
        console.log(res.Cdata)
        setData()
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Specification />
        </div>
    )
}

export default SpecHead;