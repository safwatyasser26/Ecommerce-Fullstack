import { useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiUser,
} from "react-icons/fi";

const OldNavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-sm w-full z-50 mt-8 pb-4 bg-white">
      <div className="container mx-auto flex justify-between items-center lg:px-12 px-6">
        <div className="flex justify-between w-[675px]">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold">
            Breez
          </a>
          <nav className="hidden md:flex w-[367px] justify-between items-center px-2">
            <a href="/" className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="/contact" className="relative group">
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="/about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
            <a href="/signup" className="relative group">
              Sign Up
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
            </a>
          </nav>
        </div>
        {/* Search Bar and Icons */}
        <div className="hidden md:flex justify-between items-center w-90">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-64 pl-5 pr-3 py-2 rounded-sm bg-gray-100 text-gray-600"
            />
            <button>
              <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl" />
            </button>
          </div>
          <a href="/favorite">
            <FiHeart className="text-2xl" />
          </a>
          <a href="/cart">
            <FiShoppingCart className="text-2xl" />
          </a>
          <a href="/signin">
            <FiUser className="text-2xl" />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FiMenu className="text-2xl" />
        </button>
      </div>
    </header>
  );
};

export default OldNavBar;
