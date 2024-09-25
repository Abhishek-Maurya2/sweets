/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SdkjOYvFqk2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/services/Navbar";
import useCart from "@/store/useCart";
import { Minus, Plus, X } from "lucide-react";

const CartCard = ({ items }) => {
  const [quantity, setQuantity] = useState(1);

  const removeFromCart = useCart((state) => state.removeFromCart);
  const handleRemove = () => {
    removeFromCart(items);
  };

  return (
    <div className="flex gap-6 border rounded-xl p-2 shadow-lg">
      {/* image */}
      <div className="flex-shrink-0 w-36 h-36 overflow-hidden rounded-lg">
        <img
          src={items.image}
          alt={items.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-4 justify-center w-60">
        <div className="">
          <h2 className="text-xl font-bold text-wrap">{items.name}</h2>
        </div>

        <div>
          <span className="text-lg pe-2">AED. {items.price}</span>
          <span className="line-through text-sm">2,728</span>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
              else if (quantity === 1) {
                handleRemove();
              }
            }}
          >
            <Minus size={18} />
          </Button>
          <span className="px-3 py-1 border rounded">{quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <Plus size={18} />
          </Button>
        </div>
      </div>

      {/* close button */}

      <Button variant="outline" size="icon" onClick={handleRemove}>
        <X size={18} />
      </Button>
    </div>
  );
};

const Summary = ({ items }) => {
  return (
    <div className="w-[450px]">
      <div
        className="p-6 border rounded-xl
      shadow-xl
      "
      >
        <h2 className="text-lg font-bold border-b pb-2">ORDER SUMMARY</h2>

        {items.map((item, index) => {
          return (
            <div key={index} className="flex justify-between py-2">
              <span>{item.name}</span>
              <span>AED. {item.price}</span>
            </div>
          );
        })}

        <div className="flex justify-between py-2 border-t">
          <span>SALES TAX</span>
          <span>included</span>
        </div>

        <div className="flex justify-between py-2 border-t">
          <span className="font-bold">TOTAL</span>
          <span className="font-bold">
            AED. {items.reduce((total, item) => total + item.price, 0)}
          </span>
        </div>

        <Button className="w-full mt-4">PROCEED TO CHECKOUT</Button>
      </div>
    </div>
  );
};

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const getCart = useCart((state) => state.cart);
  useEffect(() => {
    // Fetch cart items using getCart method
    const items = getCart;
    setCartItems(items);
  }, [getCart]);

  return (
    <>
      <Navbar />

      <main className="flex justify-between mx-24 mt-12 gap-8">
        <div className=" flex flex-col gap-4">
          {cartItems.map((item, index) => (
            <CartCard key={index} items={item} />
          ))}
        </div>

        <Summary items={cartItems} />
      </main>
    </>
  );
}

export default Cart;
