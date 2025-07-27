"use client";
import React from "react";
import { FiEye } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Image from "next/image";
import StarRating from "@/components/Common/StarRating";
import Link from "next/link";
const ProductCard = ({ product }) => {
  return (
    <div className="w-[135px] h-[175px] lg:w-[270px] lg:h-[350px] pb-0.5">
      <div className="relative lg:w-[270px] lg:h-[250px] w-[135px] h-[100px]">
        <Image
          src={product.image.regular}
          alt="product"
          fill={true}
          objectFit="fill"
          className=""
        />

        <div className="right-3 top-3 absolute flex flex-col gap-2 z-0">
          <button className="bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center">
            <FiEye size={16} />
          </button>
          <button className="bg-white rounded-full w-[34px] h-[34px] flex items-center justify-center">
            <FaRegHeart size={20} />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between h-12.5 lg:h-25">
        <div className="relative w-full group">
          <h2
            className="
        text-base font-medium w-full h-6 overflow-hidden whitespace-nowrap text-ellipsis
        transition-all duration-300 cursor-pointer
      "
          >
            {product.name}
          </h2>
          {/* Overlay for full name on hover */}
          <div
            className="
        absolute left-0 top-0 w-max min-w-full max-w-[300px] z-50 bg-white shadow-2xl rounded p-3
        opacity-0 scale-95 pointer-events-none
        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
        transition-all duration-200
      "
          >
            <Link href={`/products/${product.id}`} className="whitespace-normal break-words text-base font-semibold">
              {product.name}
            </Link>
          </div>
        </div>
        <h2 className="text-[#DB4444] sm:text-base text-sm font-medium">
          ${product.price}
        </h2>

        <StarRating value={product.rating} count={5} size={20} />
      </div>
    </div>
  );
};

export default ProductCard;
