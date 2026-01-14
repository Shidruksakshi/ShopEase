import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch } from "react-redux";
import { addtoCart, toggleWishlist } from "../redux/slice";

export default function Card({ value }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1">

      <div className="w-full h-72 bg-white flex items-center justify-center overflow-hidden">
        <img
          src={value.img}
          alt={value.subcategory}
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="p-4 bg-purple-50">
        <h2 className="text-lg font-semibold text-center">{value.subcategory}</h2>

        <div className="flex justify-between items-center mt-1">
          <p className="text-gray-700 font-semibold">{value.brand}</p>
          <p className="text-blue-700 font-bold text-lg">₹{value.price}</p>
        </div>


        <div className="flex justify-between items-center mt-3 text-gray-700">
          <ShoppingCartIcon
            className="cursor-pointer hover:text-black"
            onClick={() => dispatch(addtoCart(value))}
          />

          <FavoriteBorderIcon
            className="cursor-pointer hover:text-red-500"
            onClick={() => dispatch(toggleWishlist(value))}

          />
        </div>
      </div>

    </div>
  );
}
