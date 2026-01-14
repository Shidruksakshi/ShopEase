import { useState } from "react";
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      
      <button 
        className="md:hidden fixed top-18 right-4 z-50 text-white bg-purple-600 p-2 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <DehazeIcon />}
      </button>

      
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-500 to-pink-300 text-white font-semibold p-6
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:relative md:h-auto
          z-40
        `}
      >
        <nav className="space-y-4 ">
          <h1 className="block text-black font-bold text-2xl hover:text-amber-300">Admin Pannel</h1>

          <Link to="/admin/dashboard" className="block hover:text-amber-300">
            Dashboard
          </Link>
          <Link to="/admin/userdata" className="block hover:text-amber-300">
            User Data
          </Link>
          <Link to="/admin/addproducts" className="block hover:text-amber-300">
            Add Products
          </Link>
          <Link to="/admin/viewproducts" className="block hover:text-amber-300">
            View Products
          </Link>
          <Link to="/admin/viewcategories" className="block hover:text-amber-300">
            View Categories
          </Link>
          <Link to="/admin/logout" className="block hover:text-amber-300">
            Logout
          </Link>
        </nav>
      </aside>

     
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
