import React,{useState} from "react";
import './Lfp.css';
import Search from "../Search";
import NavBar from "../../../components/navBar/NavBar";
import lfp from '../LFP.json'
function Ncm(){
    const [lfpj, setLfp] = useState(lfp);
    const search = (e) => {
        let target = e.target.value
       const transformedState = target ? lfp.filter((item) => (
            item.model.toUpperCase().includes(target.toUpperCase()) 
        )) : lfp
        setLfp([...transformedState])
    }
    return(
        <div>
            <NavBar />
            <Search onchange = {search} />
            <div className="ncm-content">
                {
                    lfpj.map(item => (
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