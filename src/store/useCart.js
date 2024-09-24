import { create } from "zustand";

const useCart = create((Set) => ({
  cart: localStorage.getItem("cartItems") || [],
  addToCart: (item) => {
    Set((state) => {
      const newCart = [...state.cart, item];
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  removeFromCart: (item) => {
    Set((state) => {
      const newCart = state.cart.filter((i) => i.id !== item.id);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
}));

export default useCart;
