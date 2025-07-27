"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import products from "@/data/products";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import useCartStore from "@/store/cartStore";
const page = () => {
  const pathname = usePathname();
  const [productId, setProductId] = useState(null);
  const [product, setProduct] = useState({});
  const [found, setFound] = useState(false);
  const [quantity, setQuantity] = useState(1);
  // adding product to cart
  const addToCart = useCartStore(state => state.addToCart);

  const quantityIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const quantityDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    const id = pathname.split("/")[2];
    setProductId(id);

    const foundProduct = products.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setFound(true);
    } else {
      setProduct({});
    }
  }, [productId, product]);
  return (
    <div>
      {found && (
        <div className="flex flex-col lg:flex-row gap-8 container mx-auto mt-10 lg:mt-20">
          {/* Left: Gallery */}
          <div className="flex gap-6 w-full lg:w-auto">
            {/* Thumbnails */}
            <div className="flex flex-row lg:flex-col gap-4">
              {(product.images || [product.image]).map((img, idx) => (
                <button
                  key={idx}
                  className={`rounded-lg border ${
                    idx === 0 ? "border-[#DB4444]" : "border-transparent"
                  } bg-white w-24 h-24 flex items-center justify-center`}
                >
                  <Image
                    src={img.small || img.regular || img}
                    alt={product.name}
                    width={96}
                    height={96}
                    className="object-contain w-20 h-20"
                  />
                </button>
              ))}
            </div>
            {/* Main Image */}
            <div className="bg-[#F5F5F5] rounded-lg flex items-center justify-center w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]">
              <Image
                src={product.image.regular || product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-fill w-[90%] h-[90%]"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex-1 max-w-xl p-3">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {product.name}
            </h1>
            {/* Rating, reviews, stock */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-[#FFAD33]">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(product.rating) ? "" : "opacity-30"
                    }
                  />
                ))}
              </div>
              <span className="text-gray-500 text-sm ml-2">(150 Reviews)</span>
              <span className="text-green-600 text-sm ml-4">In Stock</span>
            </div>
            <div className="text-2xl font-semibold mb-4 text-[#DB4444]">
              ${Number(product.price).toFixed(2)}
            </div>
            <div className="text-gray-600 mb-4 border-b pb-4">
              {product.description ||
                "no description available for this product."}
            </div>
            {/* Colours */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-medium">Colours:</span>
              <button className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white"></button>
              <button className="w-5 h-5 rounded-full border-2 border-[#DB4444] bg-[#DB4444]"></button>
            </div>
            {/* Sizes */}
            <div className="flex items-center gap-4 mb-4">
              <span className="font-medium">Size:</span>
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded ${
                    size === "M"
                      ? "bg-[#DB4444] text-white border-[#DB4444]"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            {/* Quantity, Buy, Wishlist */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex border rounded w-28 h-12">
                <button
                  className="flex-1 text-xl font-bold"
                  aria-label="decrease"
                  onClick={quantityDecrement}
                >
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-10 text-center border-0 focus:ring-0"
                />
                <button
                  className="flex-1 text-xl font-bold"
                  aria-label="increase"
                  onClick={quantityIncrement}
                >
                  +
                </button>
              </div>
              <button className="bg-[#DB4444] text-white px-8 py-3 rounded font-semibold hover:bg-[#b83232] transition cursor-pointer" onClick={() => addToCart(productId)}>
                Buy Now
              </button>
              <div className="relative group">
                <button className="border border-gray-300 rounded w-12 h-12 flex items-center justify-center text-2xl">
                  <FiHeart />
                </button>
                <span
                  className="
                    absolute left-1/2 -translate-x-1/2 top-full mt-2
                    px-3 py-1 rounded bg-black text-white text-xs
                    opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
                    transition-all duration-200 whitespace-nowrap z-50
                  "
                >
                  Add to favourite
                </span>
              </div>
            </div>
            {/* Delivery Info */}
            <div className="border rounded-lg divide-y bg-white">
              <div className="flex items-center gap-4 p-4">
                <span className="text-2xl">🚚</span>
                <div>
                  <div className="font-semibold">Free Delivery</div>
                  <div className="text-sm text-gray-500 underline cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4">
                <span className="text-2xl">↩️</span>
                <div>
                  <div className="font-semibold">Return Delivery</div>
                  <div className="text-sm text-gray-500">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline cursor-pointer">Details</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
