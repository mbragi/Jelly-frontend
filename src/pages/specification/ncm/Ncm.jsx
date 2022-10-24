import React,{useState} from "react";
import './Ncm.css';
import Search from "../Search";
import NavBar from "../../../components/navBar/NavBar";
import ncm from '../Ncm.json'
function Ncm(){
    const [ncmj, setNcm] = useState(ncm);
    const search = (e) => {
        let target = e.target.value
       const transformedState = target ? ncm.filter((item) => (
            item.model.toUpperCase().includes(target.toUpperCase()) 
        )) : ncm
        setNcm([...transformedState])
    }
    return(
        <div>
            <NavBar />
            <Search onchange = {search} />
            <div className="ncm-content">
                {
                    ncmj.map(item => (
                        <div className="m-content" key={item.id}>
                            <img src={item.img_url} alt="product" />
                            <div className="flex-content">
                                <p>Type:{item.type}</p>
                                <p>Model:{item.model}</p>
                                <p>Function:{item.function}</p>
                                <p>Accessories:{item.Accessories}</p>
                                <p>Specification:{item.Specification}</p>
                                <p>Version:{item.Version}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Ncm;