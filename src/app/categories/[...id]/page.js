"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import categories from "@/data/categories";
import products from "@/data/products";
import ProductCard from "@/components/Common/ProductCard";

const ITEMS_PER_PAGE = 50;

const page = () => {
  const pathname = usePathname();
  const [id, setId] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const gridRef = useRef(null);

  const getCategory = (id) => {
    const numId = Number(id);
    const category = categories.find((cat) => cat.id === numId);
    if (category) {
      return category.name;
    }
    for (const cat of categories) {
      const subcat = cat.subcategories?.find((sub) => sub.id === numId);
      if (subcat) {
        return subcat.name;
      }
    }
    return null;
  };

  useEffect(() => {
    const catId = pathname.split("/")[2];
    setId(catId);
    setCategoryName(getCategory(catId));
    setCurrentPage(1); // Reset page on category change
  }, [pathname]);

  useEffect(() => {
    if (!id) return;
    const filtered = products.filter(
      (p) =>
        getCategory(Number(id)) === p.category ||
        p.subcategory === getCategory(Number(id))
    );
    setFilteredProducts(filtered);
    setIsLoading(false);
  }, [id, isLoading]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      gridRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      gridRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="container pt-16 flex flex-col items-center md:block md:mx-auto">
      <div
        ref={gridRef}
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-5
          lg:grid-cols-4
          gap-4
        "
      >
        {!isLoading &&
          paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default page;
