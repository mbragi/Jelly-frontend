import React from "react"
import { FaSearch } from "react-icons/fa"
import './Search.css'
function Search({ onchange }){
    return(
        <div className="search">
            <input type="text" onChange={onchange}/>
            <FaSearch size={20}/>
        </div>
    )
}

export default Search