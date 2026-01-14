import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ On page reload check token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      getUser();
    }
  }, []);

  // ✅ Save token
  const saveToken = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    getUser();
  };

  const saveAdminToken = (token) => {
    localStorage.setItem("adminToken", token);
  };

  // ✅ Remove token
  const removeToken = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
  };

  const removeAdminToken = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setUser(null);
  }



  // ✅ Get User Details
  const getUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get("http://localhost:8000/api/auth/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data.user);
    } catch (err) {
      console.log("User fetch failed:", err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        saveToken,
        removeToken,
        getUser,
        saveAdminToken,
        removeAdminToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom hook to use Auth
export const useAuth = () => useContext(AuthContext);



