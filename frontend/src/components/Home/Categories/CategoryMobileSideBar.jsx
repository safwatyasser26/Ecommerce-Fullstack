import React, { useState } from "react";
import OldSideBar from "../OldSideBar";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

const CategoryMobileSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Bar Under Navbar */}
      <div className="absolute top-[60px] left-0 w-full bg-gray-100 shadow-md z-40 lg:hidden mt-2">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <button
            className="flex items-center text-gray-800 font-medium"
            onClick={toggleSidebar}
          >
            <FiMenu className="text-xl mr-2" />
            Categories
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={toggleSidebar}
        >
          <AiOutlineClose size={24} />
        </button>

        {/* OldSideBar Component */}
        <div className="p-10"><OldSideBar /></div>
        
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default CategoryMobileSideBar;
