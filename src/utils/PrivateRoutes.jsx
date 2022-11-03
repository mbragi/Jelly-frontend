import { Outlet,Navigate } from 'react-router-dom'
import { Auth } from './auth/Auth'
function PrivateRoutes() {
    return (
        Auth ? <Outlet /> : <Navigate to="/login" />
    )
}

export default PrivateRoutes