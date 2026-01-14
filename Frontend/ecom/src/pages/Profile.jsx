import React from 'react'
import { useAuth } from '../custom hook/Auth'

export default function Profile() {
    const{user, isLoggedIn} =useAuth();
  return (
    <div className='mt-28 p-6 bg-purple-200 rounded-2xl'  >
      <h1 className='font-bold text-2xl mb-3' >Profile Page</h1>

        {isLoggedIn && user ? (<h2 className='font-medium' >WelCome <br/> {user.username}</h2>) : (<h2>Please login first.</h2>)
        }

    </div>
  )
}
