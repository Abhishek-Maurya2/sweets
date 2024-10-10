import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { items } from "@/utils/items";
import Navbar from "@/services/Navbar";
import ItemCard from "@/services/ItemCard";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Homepage() {
  const navigate = useNavigate();

  const [active, setActive] = useState("All");
  const [res, setRes] = useState([]);
  const handleCategory = (e) => {
    const category = e.target.innerText;
    if (category === "All") {
      setRes([]);
      setActive("All");
      return;
    }
    const search = items.filter((item) => item.category === category);
    setRes(search);
    setActive(category);
  };

  const [size, setSize] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="rounded-full bg-red-500 h-12 w-12 fixed bottom-5 right-5 flex items-center justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="
            flex flex-col items-start
          "
          >
            <button
              onClick={handleCategory}
              className={`${
                active === "All"
                  ? "dark:bg-white dark:text-black bg-black text-white"
                  : " hover:bg-gray-200 dark:hover:bg-[#ffffff29]"
              }  p-1 rounded-sm w-full text-start`}
            >
              <p>All</p>
            </button>
            {items
              .map((item) => item.category)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((category, index) => (
                <button
                  onClick={handleCategory}
                  key={index}
                  className={`${
                    active === `${category}`
                      ? "dark:bg-white dark:text-black bg-black text-white"
                      : " hover:bg-gray-200 dark:hover:bg-[#ffffff29]"
                  }  p-1 rounded-sm w-full text-start`}
                >
                  <p>{category}</p>
                </button>
              ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Navbar />
      {size && (
        <div className="flex flex-row flex-wrap gap-2 m-4 justify-center">
          <button
            onClick={handleCategory}
            className={`${
              active === "All" ? "bg-red-400" : "bg-gray-400"
            } rounded h-20 w-20`}
          >
            <p>All</p>
          </button>

          {items
            .map((item) => item.category)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map((category, index) => (
              <button
                onClick={handleCategory}
                key={index}
                className={`${
                  active === category ? "bg-red-400" : "bg-gray-400"
                } rounded h-20 w-20`}
              >
                <p>{category}</p>
              </button>
            ))}
        </div>
      )}

      {/* items */}
      <div className="flex flex-row mx-2 md:mx-12 lg:mx-36 mt-12 gap-10">
        {!size && (
          <div className="flex flex-col items-start">
            <p className="text-2xl font-semibold">Menu</p>
            {items
              .map((item) => item.category)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((category, index) => (
                <button onClick={handleCategory} key={index}>
                  <p className="text-xl my-2">{category}</p>
                </button>
              ))}
          </div>
        )}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          {res.length > 0
            ? res.map((item) => <ItemCard items={item} key={item.id} />)
            : items.map((item, index) => <ItemCard key={index} items={item} />)}
        </div>
      </div>
    </>
  );
}

export default Homepage;
