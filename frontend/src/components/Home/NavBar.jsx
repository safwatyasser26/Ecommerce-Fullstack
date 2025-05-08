import { useState } from "react";
import { FiSearch, FiHeart, FiShoppingCart, FiMenu, FiX, FiUser } from "react-icons/fi";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-gray-800 width-[118px]">
          Breez
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="/"
            className="text-gray-800 hover:text-blue-600 transition font-medium relative group"
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="/contact"
            className="text-gray-800 hover:text-blue-600 transition font-medium relative group"
          >
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="/about"
            className="text-gray-800 hover:text-blue-600 transition font-medium relative group"
          >
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
          <a
            href="/signup"
            className="text-gray-800 hover:text-blue-600 transition font-medium relative group"
          >
            Sign Up
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
          </a>
        </nav>

        {/* Search Bar and Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Favorites Icon */}
          <FiHeart className="text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer" />

          {/* Shopping Cart Icon */}
          <div className="relative">
            <FiShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg fixed inset-x-0 top-16 z-40 p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="/"
              className="text-gray-800 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/contact"
              className="text-gray-800 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <a
              href="/about"
              className="text-gray-800 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="/signup"
              className="text-gray-800 hover:text-blue-600 transition font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign Up
            </a>
          </nav>

          <div className="mt-6 flex items-center space-x-6">
            {/* Search Bar */}
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Favorites Icon */}
            <FiHeart className="text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer" />

            {/* Shopping Cart Icon */}
            <div className="relative">
              <FiShoppingCart className="text-2xl text-gray-700 hover:text-blue-600 transition cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;