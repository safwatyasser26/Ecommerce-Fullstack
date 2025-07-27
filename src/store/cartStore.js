// store/cartStore.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (id) => {
        const cart = get().cart;
        if (!cart.includes(id)) {
          set({ cart: [...cart, id] });
        }
      },
      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item !== id),
        }));
      },
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-session-storage", // اسم التخزين
      storage: createJSONStorage(() => sessionStorage), // ← هنا الفرق
    }
  )
);

export default useCartStore;