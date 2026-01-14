import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector, useDispatch } from "react-redux";
import { addtoCart, removeFromCart, clearFromCart } from '../redux/slice';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const totalPrice = cartData.reduce(
    (total, item) => total + item.price * item.quantity, 0
  );

  return (
    <div className='min-h-screen pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white'>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl mt-5 sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">
            {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartData.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500">Add some items to get started!</p>
          </div>
        ) : (
          <>
            
            <div className="hidden lg:block bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
              <table className="min-w-full">
                <thead className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Product</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Quantity</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Price</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold">Remove</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cartData.map((item) => (
                    <tr key={item._id} className="hover:bg-purple-50 transition-colors">
                      
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <img
                            src={item.img}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <span className="font-medium text-gray-900">{item.subcategory}</span>
                        </div>
                      </td>

                      
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                          {item.category}
                        </span>
                      </td>

                      
                      <td className="px-6 py-4">
                        <div className="flex justify-center items-center gap-3">
                          <button
                            className="bg-purple-500 hover:bg-purple-600 text-white p-1.5 rounded-full transition-colors"
                            onClick={() => dispatch(removeFromCart(item._id))}
                          >
                            <RemoveIcon style={{ height: "1rem", width: "1rem" }} />
                          </button>
                          <span className="font-semibold text-gray-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="bg-purple-500 hover:bg-purple-600 text-white p-1.5 rounded-full transition-colors"
                            onClick={() => dispatch(addtoCart(item))}
                          >
                            <AddIcon style={{ height: "1rem", width: "1rem" }} />
                          </button>
                        </div>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 text-center">
                        <span className="font-bold text-gray-900">₹{item.price * item.quantity}</span>
                      </td>

                      {/* Remove */}
                      <td className="px-6 py-4 text-center">
                        <button
                          className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-colors"
                          onClick={() => dispatch(clearFromCart(item._id))}
                        >
                          <CloseIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className="lg:hidden space-y-4 mb-6">
              {cartData.map((item) => (
                <div key={item._id} className="bg-white rounded-xl shadow-lg p-4 relative">


                  <button
                    className="absolute top-4 right-4 bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full transition-colors"
                    onClick={() => dispatch(clearFromCart(item._id))}
                  >
                    <CloseIcon style={{ height: "1.25rem", width: "1.25rem" }} />
                  </button>

                  <div className="flex gap-4">

                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg flex-shrink-0"
                    />


                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-2 pr-8 truncate">
                        {item.subcategory}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium mb-3">
                        {item.category}
                      </span>


                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3">
                          <button
                            className="bg-purple-500 hover:bg-purple-600 text-white p-1.5 rounded-full transition-colors"
                            onClick={() => dispatch(removeFromCart(item._id))}
                          >
                            <RemoveIcon style={{ height: "1rem", width: "1rem" }} />
                          </button>
                          <span className="font-semibold text-gray-900 w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="bg-purple-500 hover:bg-purple-600 text-white p-1.5 rounded-full transition-colors"
                            onClick={() => dispatch(addtoCart(item))}
                          >
                            <AddIcon style={{ height: "1rem", width: "1rem" }} />
                          </button>
                        </div>


                        <span className="font-bold text-lg text-purple-600">
                          ₹{item.price * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-semibold text-gray-900">Total:</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                ₹{totalPrice}
              </span>
            </div>
            <button 
            onClick={() => navigate('/payment')}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Proceed to Checkout
            </button>

          </>
        )}
      </div>
    </div>
  );
}