"use client"
import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import categories from "@/data/categories"; // Assuming you have a categories.js file in data folder
const SideBar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (index) => {
        setOpenCategory(openCategory === index ? null : index);
    };

    return (
        <aside className="w-55 pt-10 overflow-y-auto overflow-x-none no-scrollbar pr-4"
               style={{
                   boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.1)' // x-offset = right
               }}>
            <ul className="space-y-1">
                {categories.map((category, index) => (
                    <li key={index} className="cursor-pointer">
                        {/* Main Category */}
                        <div
                            className="hover:text-gray-600 transition flex justify-between items-center"
                            onClick={() => toggleCategory(index)}
                        >
                                <a href={`/categories/${category.id}`}>{category.name}</a>
                            {openCategory === index ? (
                                <IoIosArrowUp className="" />
                            ) : (
                                <IoIosArrowDown className="" />
                            )}
                        </div>

                        {/* Subcategories */}
                        <ul
                            className={`pl-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                                openCategory === index ? "max-h-40" : "max-h-0"
                            }`}
                        >
                            {category.subcategories.map(subcategory => (
                                <li  key={subcategory.name}><a href={`/categories/${subcategory.id}`} className="hover:text-gray-700 transition">
                                    {subcategory.name}
                                </a></li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;
