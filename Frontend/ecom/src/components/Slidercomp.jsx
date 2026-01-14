import React from 'react'

import img1 from '../image/download.png'
import img2 from '../image/img33.png'
import img3 from '../image/offer1-removebg-preview.png'
import Slider from "react-slick";

 const ImgList = [
      {
        id: 1,
        img: img1,
        title: "Style in Every Step",
        des: "Embrace the season with chic layers and bold colors. Elevate your wardrobe with looks that turn every outing into a fashion moment."
      },
      {
        id: 2,
        img: img2,
        title: "Cozy Chic Collection",
        des: "Embrace the season with chic layers and bold colors. Elevate your wardrobe with looks that turn every outing into a fashion moment."
      },
      {
        id: 3,
        img: img3,
        title: "Upto 50% off on all Kid's Wear",
        des: "Grab adorable outfits for your little ones at unbeatable prices. Soft, comfy, and stylish — perfect for every season!"
      }
    ]

export default function Slidercomp() {

    const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
   
  return (
    <Slider {...settings}>
        {ImgList.map((item) => (
          <div key={item.id}>
            <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px]
        bg-gray-100 flex justify-center items-center">

              {/* background shape */}
              <div className="h-[700px] w-[700px] bg-purple-400/40
        absolute -top-1/2 right-0 rounded-3xl rotate-45 z-0"></div>

              {/* hero content */}
              <div className="container mx-auto px-4 pb-8 sm:pb-0 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">

                  {/* text */}
                  <div className="flex flex-col justify-center gap-4 text-center pt-2 sm:pt-0">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {item.title}
                    </h1>

                    <p className="text-md mt-4 max-w-lg mx-auto">
                      {item.des}
                    </p>

                    <div className="mt-6">
                      <a  href='#tproducts' className="bg-amber-300 hover:scale-105 duration-200 text-white py-2 px-6 rounded-full">
                        Order Now
                      </a>
                    </div>
                  </div>

                  {/* image */}
                  <div className="flex justify-center">
                    <img
                      src={item.img}
                      className="w-[200px] sm:w-[350px] lg:w-[450px] object-contain"
                    />
                  </div>

                </div>
              </div>

            </div>
          </div>
        ))}
      </Slider>
  )
}
