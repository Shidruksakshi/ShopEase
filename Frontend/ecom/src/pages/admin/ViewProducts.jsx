import React, { useEffect, useState } from "react";

export default function ViewProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:8000/api/products/product");
      const data = await res.json();
      setProducts(data.pdata);
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-6 shadow bg-[#efdde8] rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">Product Details</h2>

      {/* Wrapper box */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">

        {/* Header */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-sm font-semibold text-gray-600 px-6 py-4 border-b">
          <div>Image</div>
          <div>Name</div>
          <div>Category</div>
          <div>Size</div>
        </div>

        {/* Rows */}
        <div>
          {products.length > 0 ? (
            products.map((item) => (
              <div
                key={item._id}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center px-6 py-4 border-b last:border-none hover:bg-gray-100 transition"
              >
                <div className=" h-20 w-20 object-cover "><img className="h-20 " src={item.img} /></div>
                <div className="font-medium text-gray-900">{item.name}</div>
                <div className="text-gray-700">{item.category}</div>
                <div className="text-gray-700">{item.size}</div>
              </div>
            ))
          ) : (
            <div className="px-6 py-4 text-center text-gray-500">
              No products found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
