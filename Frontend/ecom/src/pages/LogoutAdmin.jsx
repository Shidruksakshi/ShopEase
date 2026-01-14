import React, { useEffect } from 'react'
import { useAuth } from '../custom hook/Auth'
import { Navigate } from 'react-router-dom'

export default function LogoutAdmin() {

    const { removeAdminToken } = useAuth()


    useEffect(() => {
        removeAdminToken()
    }, [removeAdminToken])

     return(
        <>
      <Navigate to="/loginadmin" />
      
      </>
     )
    
}
