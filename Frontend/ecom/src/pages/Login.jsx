import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../custom hook/Auth";

export default function Login() {

          const {saveToken} =  useAuth()


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
      const res = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      });

      if (res.data.token) {
        // ✅ Save token in localStorage
            saveToken(res.data.token)

        setSuccess("Login Successful!");
        setError("");

        // Redirect to homepage or dashboard
        setTimeout(() => {
          navigate("/");
        }, 800);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setSuccess("");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-90 text-white rounded-3xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-2 text-black">Welcome Back!</h2>
        <p className="text-gray-400 text-sm mb-6">
          Login to continue shopping
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-amber-500 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-pink-500 py-2 rounded-md font-semibold mt-4 hover:bg-pink-600 transition-all"
          >
            LOGIN
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-5">
          Don't have an account?
          <span
            onClick={() => navigate("/register")}
            className="text-pink-500 ms-1 font-semibold cursor-pointer"
          >
            Register
          </span>
        </p>

        <div className="flex justify-center mt-8">
          <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold">🔑</span>
          </div>
        </div>
      </div>
    </div>
  );
}
