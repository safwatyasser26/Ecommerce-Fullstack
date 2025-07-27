"use client";
import useCartStore from "@/store/cartStore";
import { useState, useEffect } from "react";
import products from "@/data/products";
import Image from "next/image";

const MainCart = () => {
  const cart = useCartStore((state) => state.cart);
  

  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const items = cart
      .map(
        (id) =>
          products.find((p) => String(p.id) === String(id)) || {
            id,
            name: "Not found",
            price: "-",
            image: { small: "" },
          }
      )
      .map((item) => ({ ...item, quantity: 1 }));
    setCartItems(items);
    setIsLoading(false);
    console.log("Cart items updated:", items);
  }, [cart]);

  const handleQuantityChange = (idx, value) => {
    const qty = Math.max(1, Number(value));
    setCartItems((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, quantity: qty } : item))
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) =>
      item.price !== "-" ? sum + Number(item.price) * item.quantity : sum,
    0
  );

  return (
    <div className="container mx-auto mt-8 md:mt-16 h-fit overflow-hidden">
      <div>
        <table className="w-full text-left border-separate border-spacing-y-6">
          <thead>
            <tr>
              <th className="py-4 px-6 font-semibold text-gray-700 bg-white">
                Product
              </th>
              <th className="py-4 px-6 font-semibold text-gray-700 bg-white">
                Price
              </th>
              <th className="py-4 px-6 font-semibold text-gray-700 bg-white">
                Quantity
              </th>
              <th className="py-4 px-6 font-semibold text-gray-700 bg-white">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody>
            {!isLoading &&
              cartItems.map((item, idx) => (
                <tr key={item.id} className="bg-white">
                  <td className="flex items-center gap-4 py-6 px-6">
                    {item.image.small ? (
                      <Image
                        alt={item.name}
                        src={item.image.small}
                        width={54}
                        height={54}
                        className="rounded"
                      />
                    ) : (
                      <span className="w-[54px] h-[54px] bg-gray-200 flex items-center justify-center text-xs text-gray-500 rounded">
                        N/A
                      </span>
                    )}
                    <span className="font-medium">{item.name}</span>
                  </td>
                  <td className="py-6 px-6 font-medium align-middle">
                    {item.price !== "-"
                      ? `$${Number(item.price).toFixed(2)}`
                      : "-"}
                  </td>
                  <td className="py-6 px-6 align-middle">
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(idx, e.target.value)
                      }
                      className="w-16 border rounded px-2 py-1 text-center"
                    />
                  </td>
                  <td className="py-6 px-6 font-medium align-middle">
                    {item.price !== "-"
                      ? `$${(Number(item.price) * item.quantity).toFixed(2)}`
                      : "-"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition">
          Return To Shop
        </button>
        <button className="border border-gray-400 px-6 py-2 rounded hover:bg-gray-100 transition">
          Update Cart
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-10">
        <div className="flex-1 flex items-start gap-4">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border border-gray-400 rounded px-4 py-2 w-full max-w-xs"
          />
          <button className="bg-[#DB4444] text-white px-8 py-2 rounded hover:bg-[#b83232] transition">
            Apply Coupon
          </button>
        </div>

        <div className="w-full md:w-[350px] border border-gray-300 rounded-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="flex justify-between py-2 border-b">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between py-2 font-semibold">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <button className="w-full mt-6 bg-[#DB4444] text-white py-3 rounded hover:bg-[#b83232] transition font-semibold">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
