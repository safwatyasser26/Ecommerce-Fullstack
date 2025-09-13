"use client";
import products from "@/data/products";
import { useEffect, useState } from "react";
import ProductList from "@/components/Common/ProductList";
import useSearchStore from "@/store/searchStore";
import ProductCard from "@/components/Common/ProductCard";
const ITEMS_PER_PAGE = 50;

const page = () => {
  const searchTerm = useSearchStore((state) => state.searchTerm);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = products.filter((product) => {
    const term = searchTerm?.toLowerCase();
    const nameMatch = product.name.toLowerCase().includes(term);
    const descriptionMatch = product.description
      ? product.description.toLowerCase().includes(term)
      : false;
    return nameMatch || descriptionMatch;
  });

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    console.log(searchTerm);
    console.table(paginatedItems);
  }, [searchTerm, paginatedItems]);

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedItems &&
          paginatedItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-8 mx-auto">
        <button
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
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
