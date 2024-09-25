import React, { useState } from "react";
import useCart from "@/store/useCart";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ItemCard = ({ items }) => {
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const [cart, setCart] = useState(false);
  const handleAddToCart = () => {
    setCart(!cart);
    addToCart(items);
  };
  const handleRemoveFromCart = () => {
    setCart(!cart);
    removeFromCart(items);
  };

  return (
    <Card className="flex flex-col p-2 w-40 md:w-64 lg:w-80">
      <div className="rounded-lg overflow-hidden h-36 md:h-40 lg:h-64">
        <img
          src={items.image}
          alt="placeholder"
          className="object-cover w-full h-full hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="py-2 px-1">
        <p className="text-lg truncate">{items.name}</p>
        <p>AED. {items.price}</p>
      </div>

      <Button
        className={cart && "border-red-500 text-red-500"}
        variant={cart ? "outline" : ""}
        onClick={cart ? handleRemoveFromCart : handleAddToCart}
      >
        {cart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </Card>
  );
};

export default ItemCard;
