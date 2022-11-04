import { Outlet,Navigate } from 'react-router-dom'
import { Auth } from './auth/Auth'
function PrivateRoutes() {
    
    return (
        Auth ? <Outlet /> : <Navigate to="*" />
    )
}

export default PrivateRoutes