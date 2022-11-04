import { useEffect,useState } from "react"

export const Auth = () => {
    const[auth ,setAuth] = useState(false)
    const[userData ,setUserData] = useState(false)
    const[loading ,setLoading] = useState(true)
    
    useEffect(()=>{
        const auths = JSON.parse(localStorage.getItem('auth'))
        if(auths.hasOwnProperty("token") === true){
            setAuth(auths.token)
        }else{
            setAuth(false)
        }
        const userD = JSON.parse(localStorage.getItem('userData'))

        if(userD){
            setUserData(userD.isAdmin)
        }else{
            setUserData(false)
        }
        setLoading(false)

        console.log(auth)
        console.log(userData)
    },[])


    

    return{auth,userData,loading}

    
}





