import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { Auth } from './auth/Auth'
function PrivateRoutes() {
    const {auth, userData,loading} = Auth()
    if(!loading){
        if(auth){
            return(
                userData ? <Outlet /> : <Navigate to="/*" />
            )
        }else{
            return(
                <Navigate to="/" />
            )
        }
    }
    
}

export default PrivateRoutes