import React from 'react'
import img from '../image/404.jpg'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {

  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-white/20 ">
      
      <img src={img} alt="404 Page Not Found" className="max-w-[60%] max-h-[60%] object-contain"/>
      
      <h1 className="font-bold text-2xl text-blue-700 mt-4">
        The Page You Requested Could Not Be Found
      </h1>
      <button onClick={()=> navigate('/')} className='bg-blue-600 p-3 text-white rounded-2xl mt-3'>
        Go To Home
      </button>
    </div>
  )
}
