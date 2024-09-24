import React, { useEffect, useState } from "react";
import ThemeToggleButton from "../ThemeToggltButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useUser from "../store/useUser";

import { Card } from "@/components/ui/card";
import { LucideShoppingBag } from "lucide-react";
import useCart from "@/store/useCart";

import { items } from "@/utils/items";

const ItemCard = ({ items }) => {
  const addToCart = useCart((state) => state.addToCart);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const [cart, setCart] = useState(false);
  const handleAddToCart = () => {
    setCart(!cart);
    addToCart({ id: 1, name: "Rasgulla", price: 700 });
  };
  const handleRemoveFromCart = () => {
    setCart(!cart);
    removeFromCart({ id: 1, name: "Rasgulla", price: 700 });
  };

  return (
    <Card className="flex flex-col p-2 w-40 md:w-64 lg:w-80">
      <div className="rounded-lg overflow-hidden h-36 md:h-40 lg:h-64">
        <img
          src={items.image}
          alt="placeholder"
          className="w-full object-cover hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="py-2 px-1">
        <p className="text-lg truncate">{items.name}</p>
        <p>Rs. {items.price}</p>
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

function Homepage() {
  const navigate = useNavigate();

  const user = useUser((state) => state.user);
  const logout = useUser((state) => state.logout);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (user) setIsLogged(true);
    else setIsLogged(false);
  }, [user]);

  return (
    <>
      <div
        className="flex items-center justify-between px-8 py-2 backdrop-blur-lg border-b-2 border-gray-200 dark:border-white
        "
      >
        <p className="text-3xl ">Rola</p>
        <div className="flex gap-4 items-center">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate("/cart")}
          >
            <LucideShoppingBag size={24} />
          </Button>
          <ThemeToggleButton />
          {isLogged ? (
            <Button
              onClick={() => {
                logout();
                setIsLogged(false);
              }}
            >
              Logout
            </Button>
          ) : (
            <Button
              onClick={() => {
                navigate("/auth");
              }}
            >
              Login
            </Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap justify-center w-fullpt-10 gap-4 mt-10 p-1">
        {items.map((item, index) => (
          <ItemCard key={index} items={item} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
