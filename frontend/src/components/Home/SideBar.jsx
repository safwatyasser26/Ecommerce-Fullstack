const SideBar = () => {
  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby's & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  return (
    <aside className="hidden lg:block w-64 bg-white shadow-md p-16">
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-gray-800 hover:text-blue-600 cursor-pointer transition"
          >
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
