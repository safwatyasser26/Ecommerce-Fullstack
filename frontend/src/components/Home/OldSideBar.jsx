import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const OldSideBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const categories = [
    {
      name: "Women's Fashion",
      subcategories: ["Dresses", "Tops", "Shoes", "Accessories"],
    },
    {
      name: "Men's Fashion",
      subcategories: ["Shirts", "Pants", "Shoes", "Watches"],
    },
    {
      name: "Electronics",
      subcategories: ["Mobile Phones", "Laptops", "Cameras", "Accessories"],
    },
    {
      name: "Home & Lifestyle",
      subcategories: ["Furniture", "Decor", "Kitchen", "Bedding"],
    },
    {
      name: "Medicine",
      subcategories: ["Vitamins", "Supplements", "First Aid", "Prescriptions"],
    },
    {
      name: "Sports & Outdoor",
      subcategories: ["Fitness Equipment", "Outdoor Gear", "Sportswear"],
    },
    {
      name: "Baby's & Toys",
      subcategories: ["Toys", "Clothing", "Baby Care", "Accessories"],
    },
    {
      name: "Groceries & Pets",
      subcategories: ["Food", "Beverages", "Pet Supplies"],
    },
    {
      name: "Health & Beauty",
      subcategories: ["Skincare", "Haircare", "Makeup", "Wellness"],
    },
  ];

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
              {category.name}
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
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex} className="hover:text-gray-700 transition">
                  {subcategory}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default OldSideBar;
