import { Outlet,Navigate } from 'react-router-dom'
import { Auth } from './auth/Auth'
import { IsAdmin } from './auth/Auth'
function PrivateRoutes() {
    if(Auth){
        return (
            IsAdmin ? <Outlet /> : <Navigate to="*" />
        )
    }else{
        return(
            <Navigate to="/" />
        )
    }

}

export default PrivateRoutes