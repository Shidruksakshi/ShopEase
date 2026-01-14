import React, { useState } from "react";
import { useAuth } from "../custom hook/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginAdmin() {
  const { saveAdminToken } = useAuth()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await axios.post("http://localhost:8000/api/admin/loginAdmin", {
        email,
        password,
      });
      if (res.data.token) {
        saveAdminToken(res.data.token);  // <-- Save admin token separately
        setSuccess("Login Successful!");
        setError("");

        setTimeout(() => {
          navigate("/admin");
        }, 800);
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-2">Admin Login</h2>
        <p className="text-gray-500 text-center mb-6">
          Enter credentials to access admin panel
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter admin email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 outline-none"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Button */}
          <input
            type="submit"
            value="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all"
          />


        </form>


      </div>
    </div>
  );
}

