import { useEffect,useState } from "react"
export const Auth = () => {
    const[auth ,setAuth] = useState({})
    useEffect(()=>{
        setAuth(JSON.parse(localStorage.getItem('auth')))
    },[])

    if(auth) return auth.token

    return false
}

export const IsAdmin = () => {
    const[userData ,setUserData] = useState({})
    useEffect(()=>{
        setUserData(JSON.parse(localStorage.getItem('userData')))
    },[])

    if(userData.isAdmin) return userData.isAdmin

    return false
}
