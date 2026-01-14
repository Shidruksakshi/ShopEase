import React, { useState } from 'react';
import axios from "axios";

export default function AddProducts() {

  const [addproduct, setAddProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subcategory: "",
    Brand: "",
    size: "",
    color: "",
    stock: "",
    img: ""
  });

  const [error, SetError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setAddProduct({
      ...addproduct,
      [e.target.name]: e.target.value
    });
  };


  const handleimgChange = (e) => {
    setAddProduct({
      ...addproduct,
      img: e.target.files[0],
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      name,
      description,
      price,
      category,
      subcategory,
      Brand,
      size,
      color,
      stock,
      img
    } = addproduct;

    // validation
    if (!name || !description || !price || !category || !subcategory || !Brand || !size || !color || !stock || !img) {
      SetError("All fields are required !!!!");
      return;
    }

    try {
      const adminToken = localStorage.getItem("adminToken");


      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("Brand", Brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("stock", stock);
      formData.append("image", img);

      const res = await axios.post(
        "http://localhost:8000/api/admin/addproduct",
        formData,
        {
          headers: {
            Authorization: `Bearer ${adminToken}`,
          }
        }
      );

      if (res.status === 201) {
        setSuccess("Product added successfully!");
        SetError("");
      }

    } catch (error) {
      SetError(error.response?.data?.message || "Server error, try again later");
      setSuccess("");
    }

  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-[#efdde8] rounded-2xl">
      <div className="backdrop-blur-xl bg-white/40 p-8 rounded-2xl shadow-2xl w-full max-w-5xl border border-white/60">

        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Add Product
        </h1>

        {error && <p className="text-red-600 text-center mb-3">{error}</p>}
        {success && <p className="text-green-600 text-center mb-3">{success}</p>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={addproduct.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={addproduct.price}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />

            <select
              name="category"
              value={addproduct.category}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            >
              <option value="">Select Category</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
              <option value="Unisex">Unisex</option>
            </select>

            <input
              type="text"
              name="Brand"
              placeholder="Brand"
              value={addproduct.Brand}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />


            <div className="flex items-center gap-4">
              <input
                type="color"
                name="color"
                value={addproduct.color}
                onChange={handleChange}
                className="w-12 h-12 rounded cursor-pointer"
              />

              <span className="text-gray-700 font-medium">
                {addproduct.color}
              </span>

              <div
                className="w-10 h-10 rounded border"
                style={{ backgroundColor: addproduct.color }}
              />
            </div>

            <input
              type="file"
              name="img"
              placeholder="Image"

              onChange={handleimgChange}
              accept='image/*'  // only access imgs 
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />



          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-4">

            <input
              type="text"
              name="subcategory"
              placeholder="Subcategory"
              value={addproduct.subcategory}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />

            <input
              type="text"
              name="size"
              placeholder="Size (e.g., XS, S, M, L, XL)"
              value={addproduct.size}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={addproduct.stock}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none focus:bg-white transition"
            />

            <textarea
              name="description"
              placeholder="Product Description"
              value={addproduct.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-white/70 text-gray-800 outline-none h-[130px] focus:bg-white transition"
            />




          </div>
          <div className="mt-6 flex justify-center col-span-2">
            <button
              type="submit"
              className="w-40 bg-fuchsia-500 text-white font-semibold p-3 rounded-lg hover:bg-fuchsia-700 transition"
            >
              Add Product
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
