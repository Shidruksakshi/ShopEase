import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ViewCategories() {
  const [categories, setCategories] = useState([]);
  const [openCategory, setOpenCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/cat/get");
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-gray-600">
        Loading categories...
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-[#efdde8] rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Category Page
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, index) => (
          <div
            key={cat._id}
            className="bg-purple-200 rounded-xl shadow-sm overflow-hidden"
          >
            {/* IMAGE */}
            {cat.image && (
              <div className="p-4 flex justify-center bg-purple-200">
                <img
                  src={cat.image}
                  alt={cat.catname}
                  className="w-full max-w-[220px] h-auto object-contain rounded-lg"
                />
              </div>
            )}

            {/* HEADER */}
            <button
              onClick={() => toggleCategory(index)}
              className="w-full flex justify-between items-center px-4 py-3 font-semibold text-gray-800 bg-purple-100 hover:bg-purple-300 transition"
            >
              {cat.catname}
              <span className="text-sm">
                {openCategory === index ? "▲" : "▼"}
              </span>
            </button>

            {/* SUBCATEGORIES */}
            {openCategory === index && cat.subcategories?.length > 0 && (
              <ul className="px-4 py-3 space-y-2 bg-purple-50">
                {cat.subcategories.map((sub, subIndex) => (
                  <li
                    key={subIndex}
                    className="py-2 px-3 rounded bg-white hover:bg-purple-200 cursor-pointer transition"
                  >
                    {sub}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
