import React from 'react'
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';

export default function Wishlist() {

    const addlist = useSelector((state) => state.wishlist);
    
   
    
  return (
   <>
     <div className="container">
        <div className="row grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mt-24 mb-5">


          {

            addlist.map((value) => {

              return (
                <Card value={value} />
              )
            })

          }



        </div>
      </div>
   
   </>
   
   
  )
}
