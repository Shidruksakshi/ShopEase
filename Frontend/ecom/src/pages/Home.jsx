import React, { useEffect } from "react";
import { useAuth } from "../custom hook/Auth";

import { Link } from "react-router-dom";
import sweater from '../image/SWEATER.jpg'
import denim from '../image/Jeans.jpg'
import tops from '../image/Tops.jpg'
import jackets from '../image/Jackets.jpg'
import Slider from "../components/Slidercomp";
import Card from "../components/Card";
import { AllProducts } from "../AllProducts";



export default function Home() {
  const { user, getUser, isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn && !user) {
      getUser();
    }
  }, [isLoggedIn]);

  const TrandingProducts = AllProducts.map(product => ({
  ...product,                                                //here we convert the id to _id because are category page contains _id
  _id: product.id
}));


  return (
    <>
      <Slider/>

      <div className="mt-20 px-4 flex justify-center">
        <div className=" w-full max-w-4xl">

          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
            Explore More
          </h2>

          {/* Centered 2-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">

            {/* SWEATERS */}
            <Link to="/lsweaters" className="group w-full">
              <div className="relative overflow-hidden rounded-2xl h-[500px]">

                <img
                  src={sweater}
                  alt="Sweaters"
                  className="w-full h-full object-cover rounded-2xl
            group-hover:scale-105 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
            transition duration-300 rounded-2xl"></div>

                {/* Text Center Bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-3xl text-white font-bold tracking-wide">
                    SWEATERS
                  </h3>
                  <p className="text-sm text-gray-200">EXPLORE</p>
                </div>

              </div>
            </Link>

            {/* DENIM */}
            <Link to="/ldenim" className="group w-full">
              <div className="relative overflow-hidden rounded-2xl h-[500px]">

                <img
                  src={denim}
                  alt="Denim"
                  className="w-full h-full object-cover rounded-2xl
            group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
            transition duration-300 rounded-2xl"></div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-3xl text-white font-bold tracking-wide">
                    DENIM
                  </h3>
                  <p className="text-sm text-gray-200">EXPLORE</p>
                </div>

              </div>
            </Link>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center mt-3">

            {/* Coats & Jackets */}
            <Link to="/cots&jackets" className="group w-full">
              <div className="relative overflow-hidden rounded-2xl h-[500px]">

                <img
                  src={jackets}
                  alt="cots-&-Jackets"
                  className="w-full h-full object-cover rounded-2xl
            group-hover:scale-105 transition duration-700"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
            transition duration-300 rounded-2xl"></div>

                {/* Text Center Bottom */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-3xl text-white font-bold tracking-wide">
                    COATS & JACKETS
                  </h3>
                  <p className="text-sm text-gray-200">EXPLORE</p>
                </div>

              </div>
            </Link>

            {/* Tops */}
            <Link to="/tops" className="group w-full">
              <div className="relative overflow-hidden rounded-2xl h-[500px]">

                <img
                  src={tops}
                  alt="Tops"
                  className="w-full h-full object-cover rounded-2xl
            group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40
            transition duration-300 rounded-2xl"></div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-3xl text-white font-bold tracking-wide">
                    TOPS
                  </h3>
                  <p className="text-sm text-gray-200">EXPLORE</p>
                </div>

              </div>
            </Link>

          </div>
        </div>



      </div>

      <div id="tproducts">
        <h1 className="text-2xl sm:text-3xl md:text-4xl   font-bold mt-10 mb-5 text-center text-gray-900">Trending products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mt-10 mb-5">
        {
          TrandingProducts.map((product, i, a) => {
            //  console.log("HOME PRODUCT:", product);
            return (
              <Card value={product} />
             
            )
          }
          )
        }
      </div>
        
      </div>


    </>




  );
}
