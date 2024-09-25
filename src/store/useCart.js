import { create } from "zustand";

const useCart = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cartItems")) || [],
  addToCart: (item) => {
    set((state) => {
      const newCart = [...state.cart, item];
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeFromCart: (item) => {
    set((state) => {
      const newCart = state.cart.filter((i) => i.id !== item.id);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
}));

export default useCart;
