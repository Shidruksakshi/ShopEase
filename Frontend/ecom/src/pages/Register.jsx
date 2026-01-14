import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',

  });

  const [error, SetError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();   //stops page refresh

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      SetError("All fields are required");
      return;
    }

    if(password<6){
      SetError("password must be at least 6 characters long");
      return;

    }
    try {

      const res = await axios.post('http://localhost:8000/api/auth/register', {
        username,
        email,
        password
      });

      


      if (res.status === 201) {
        setSuccess("Registration successful!");
        SetError('');
        // Redirect to login page
        navigate('/login');
      }
    } catch (err) {
      // Handle server errors
      SetError(err.response?.data?.message || "Server error, try again later");
      setSuccess('');
    }

  };



  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-90 text-white rounded-3xl shadow-lg p-6">
        {/* Header */}
        <h2 className="text-2xl  font-bold mb-2 text-black">Welcome!</h2>
        <p className="text-gray-400 text-sm mb-6">
          Create an account to join Shopease
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
           <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="enter username"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-800 text-white outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="********"
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
            CREATE
          </button>
        </form>


        <p className="text-center text-sm text-gray-400 mt-5">
          Already have an account?
          <a href="#" className="text-pink-500 ms-1 font-semibold">
            SIGN IN
          </a>
        </p>


        <div className="flex justify-center mt-8">
          <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold">☺️</span>
          </div>
        </div>
      </div>
    </div>
  );
}

