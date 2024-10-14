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
  increaseItem: (item) => {
    set((state) => {
      const newCart = state.cart.map((i) => {
        if (i.id === item.id) {
          i.quantity += 1;
        }
        return i;
      });
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  decreaseItem: (item) => {
    set((state) => {
      const newCart = state.cart.map((i) => {
        if (i.id === item.id) {
          i.quantity -= 1;
        }
        return i;
      });
      localStorage.setItem("cartItems", JSON.stringify(newCart));
      return { cart: newCart };
    });
  },
  clearCart: () => {
    set((state) => {
      localStorage.removeItem("cartItems");
      return { cart: [] };
    });
  },
}));

export default useCart;
