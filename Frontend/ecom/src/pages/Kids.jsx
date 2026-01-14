import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import Slider from '../components/Slidercomp'

export default function Kids() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchkidsProducts = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/products/product?category=Kids"
                );
                setProducts(res.data.pdata);
            } catch (error) {
                console.log(error);
            }
        };

        fetchkidsProducts();
    }, []);

    return (
        <div className=" bg-purple-100 rounded-2xl py-10">

            <Slider />

            <h1 className="text-center font-semibold text-amber-600 md:text-xl sm:text-md mt-10">
                Fashion that enhances your confidence and highlights your unique charm.
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mt-4 mb-5">
                {products.map((product, i) => (
                    <Card value={product} key={product._id || i} />
                ))}
            </div>
        </div>
    );
}

