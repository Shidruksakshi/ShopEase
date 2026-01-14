import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import { useAuth } from '../custom hook/Auth';
import { useSelector } from 'react-redux';
import InputIcon from '@mui/icons-material/Input';

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  const [mainMenuOpen, setMainMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const cartData = useSelector((state) => state.cart);
  const wishdata = useSelector((state) => state.wishlist);

  const Menu = [
    { id: 1, category: 'WOMEN', link: '/women' },
    { id: 2, category: 'MEN', link: '/men' },
    { id: 3, category: 'KIDS', link: '/kids' },
    { id: 4, category: 'UNISEX', link: '/unisex' },
  ];

  // Close mobile menu and dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mainMenuOpen || dropdownOpen) {
        const target = e.target;
        if (!target.closest('.mobile-menu') && !target.closest('.menu-button')) {
          setMainMenuOpen(false);
        }
        if (!target.closest('.dropdown-container')) {
          setDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mainMenuOpen, dropdownOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mainMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mainMenuOpen]);

  return (
    <>
      <nav className="w-full fixed top-0 z-[100] bg-gradient-to-r from-purple-400/60 via-white/40 to-purple-400/60 backdrop-blur-xl border-b border-white/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-3 py-2">
          {/* Main row - always horizontal */}
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="logo flex items-center space-x-2 flex-shrink-0">
              <img
                src="/Product/logo.svg"
                alt="Logo"
                className="object-cover w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/50 shadow-md"
              />
              <Link to="/" className="font-bold text-xl sm:text-2xl font-serif drop-shadow-md whitespace-nowrap">
                ShopEase
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              <Link to="/" className="text-lg hover:text-amber-400 transition-all hover:scale-110">
                <HomeIcon />
              </Link>

              {/* Dropdown */}
              <div className="relative dropdown-container">
                <button
                  className="text-lg hover:text-amber-400 transition-all hover:scale-110"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <InputIcon />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-md shadow-lg rounded-lg border border-gray-200 z-[110]">
                    {!isLoggedIn ? (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-t-lg"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Login
                        </Link>
                        <Link
                          to="/register"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-b-lg"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Register
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/contactus"
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-t-lg"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Contact Us
                        </Link>
                        <button
                          className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-100 rounded-b-lg"
                          onClick={() => {
                            setDropdownOpen(false);
                            navigate('/logout');
                          }}
                        >
                          Log Out
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

              <Link to="/cart" className="hover:text-amber-400 transition-all">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <ShoppingCartIcon className="text-2xl" />
                  {cartData.length > 0 && (
                    <span className="absolute -top-1 -right-1 text-black text-xs bg-white/70 rounded-full px-1 py-0.5 min-w-[20px] text-center">
                      {cartData.length}
                    </span>
                  )}
                </div>
              </Link>

              <Link to="/wishlist" className="hover:text-amber-400 transition-all">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <FavoriteIcon className="text-2xl" />
                  {wishdata.length > 0 && (
                    <span className="absolute -top-1 -right-1 text-black text-xs bg-white/70 rounded-full px-1 py-0.5 min-w-[20px] text-center">
                      {wishdata.length}
                    </span>
                  )}
                </div>
              </Link>

              <Link to="/profile" className="text-lg hover:text-amber-400 transition-all hover:scale-110">
                <PersonIcon />
              </Link>
            </div>

            {/* Mobile Icons - Cart, Wishlist, and Menu */}
            <div className="flex lg:hidden items-center gap-2 sm:gap-3">
              <Link to="/cart" className="hover:text-amber-400 transition-all">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <ShoppingCartIcon className="text-xl" />
                  {cartData.length > 0 && (
                    <span className="absolute -top-1 -right-1 text-black text-xs bg-white/70 rounded-full px-1 py-0.5 min-w-[18px] text-center">
                      {cartData.length}
                    </span>
                  )}
                </div>
              </Link>

              <Link to="/wishlist" className="hover:text-amber-400 transition-all">
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <FavoriteIcon className="text-xl" />
                  {wishdata.length > 0 && (
                    <span className="absolute -top-1 -right-1 text-black text-xs bg-white/70 rounded-full px-1 py-0.5 min-w-[18px] text-center">
                      {wishdata.length}
                    </span>
                  )}
                </div>
              </Link>

              <button
                className="menu-button w-9 h-9 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all shadow-md"
                onClick={() => setMainMenuOpen(!mainMenuOpen)}
              >
                {mainMenuOpen ? <CloseIcon className="text-lg" /> : <MenuIcon className="text-lg" />}
              </button>
            </div>
          </div>

          {/* Desktop Category Menu */}
          <div className="hidden lg:flex flex-row justify-center gap-6 xl:gap-8 items-center mt-3 pb-1">
            {Menu.map((data) => (
              <Link
                key={data.id}
                to={data.link}
                className="text-base xl:text-lg hover:text-amber-400 transition-all hover:scale-110 font-medium"
              >
                {data.category}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`mobile-menu fixed top-0 right-0 h-full w-72 sm:w-80 bg-gradient-to-b from-purple-200 to-purple-100 shadow-2xl p-6 transform
           transition-transform duration-300 ease-in-out lg:hidden z-[110] overflow-y-auto ${mainMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          className="mb-6 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-all"
          onClick={() => setMainMenuOpen(false)}
        >
          <CloseIcon />
        </button>

        <div className="flex flex-col gap-3">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all"
            onClick={() => setMainMenuOpen(false)}
          >
            <HomeIcon /> <span className="text-lg">Home</span>
          </Link>

          <Link
            to="/profile"
            className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all"
            onClick={() => setMainMenuOpen(false)}
          >
            <PersonIcon /> <span className="text-lg">Profile</span>
          </Link>

          <div className="border-t border-purple-400/50 my-2"></div>

          <h3 className="font-bold text-lg px-4 text-gray-800 mb-1">Categories</h3>
          {Menu.map((data) => (
            <Link
              key={data.id}
              to={data.link}
              className="px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all font-medium"
              onClick={() => setMainMenuOpen(false)}
            >
              {data.category}
            </Link>
          ))}

          <div className="border-t border-purple-400/50 my-2"></div>

          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all font-medium"
                onClick={() => setMainMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all font-medium"
                onClick={() => setMainMenuOpen(false)}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/contactus"
                className="px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all font-medium"
                onClick={() => setMainMenuOpen(false)}
              >
                Contact Us
              </Link>
              <button
                className="text-left px-4 py-3 text-gray-800 hover:bg-purple-300/50 rounded-lg transition-all w-full font-medium"
                onClick={() => {
                  setMainMenuOpen(false);
                  navigate('/logout');
                }}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mainMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-[105]"
          onClick={() => setMainMenuOpen(false)}
        ></div>
      )}
    </>
  );
}