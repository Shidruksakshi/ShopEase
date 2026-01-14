import React, { useEffect } from 'react'
import { useAuth } from '../custom hook/Auth'
import { Navigate } from 'react-router-dom'

export default function Logout() {

   const {removeToken}= useAuth()


   useEffect(()=>{
    removeToken()
   },[removeToken])

  return <Navigate to="/login" />
}
