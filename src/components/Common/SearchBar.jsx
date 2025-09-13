// Example SearchBar component in Navbar
import { useRouter } from "next/navigation";
import useSearchStore from "@/store/searchStore";
import { useState } from "react";

const SearchBar = () => {
  const router = useRouter();
  const setSearchTerm = useSearchStore((state) => state.setSearchTerm);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(input);
    router.push("/search");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-2 py-1"
        placeholder="Search products..."
      />
      <button
        type="submit"
        className="ml-2 px-4 py-1 bg-[#DB4444] text-white rounded"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
