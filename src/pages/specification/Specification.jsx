import React from 'react';
import './Specification.css';
import { useNavigate } from 'react-router-dom'
function Specification({ name }) {
    const navigate = useNavigate()
    function setNavigationPath() {
        const formName = name.name
        if (formName === "NCM") {
            navigate('/product/ncm')
        } else if (formName === "APP") {
            alert('Products Current Unavailable')
        } else {
            navigate('/product/lfp')
        }
    }
    return (

        <form onClick={setNavigationPath} className="files" >
            <div className="text">
                <h1>{name.name}</h1>
                <img src={name.img_url} alt='categories' className='text' />
            </div>
        </form>
    )
}
//  <Link to='/product/ncm'>
//                 <div className="text">
//                     <h1 style={{ margin: '120px 90px 0' }}>{name.name}</h1>
//                     <RiFile3Fill size={260} style={{ color: '#06d6a0' }} className='relativespec' />
//                 </div>
//             </Link>
//             <div className="text">
//                 <h1 style={{ margin: '120px 90px 0' }}>{name.name}</h1>
//                 <RiFile3Fill size={260} style={{ color: ' #118ab2' }} className='relativespec' />
//             </div> 


export default Specification;