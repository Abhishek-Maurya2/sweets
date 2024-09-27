import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { items } from "@/utils/items";
import Navbar from "@/services/Navbar";
import ItemCard from "@/services/ItemCard";

function Homepage() {
  const navigate = useNavigate();
  const [res, setRes] = useState([]);
  const handleCategory = (e) => {
    const category = e.target.innerText;
    const search = items.filter((item) => item.category === category);
    setRes(search);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#ddd7d787] dark:bg-[#4f4d4d79] p-2 m-3 mx-4 rounded-xl flex items-center justify-center gap-2">
        <button
          onClick={handleCategory}
          className="rounded-full h-20 w-20 bg-red-400"
        >
          <p>Punjabi</p>
        </button>
        <button
          onClick={handleCategory}
          className="rounded-full h-20 w-20 bg-red-400"
        >
          <p>Thali</p>
        </button>
        <button
          onClick={handleCategory}
          className="rounded-full h-20 w-20 bg-red-400"
        >
          <p>Paneer</p>
        </button>
        <button
          onClick={handleCategory}
          className="rounded-full h-20 w-20 bg-red-400"
        >
          <p>Chinese</p>
        </button>
        <button
          onClick={handleCategory}
          className="rounded-full h-20 w-20 bg-red-400"
        >
          <p>Daal</p>
        </button>
      </div>

      <div className="flex flex-wrap justify-center w-fullpt-10 gap-4 mt-10 p-1">
        {res.length > 0
          ? res.map((item) => <ItemCard items={item} />)
          : items.map((item, index) => <ItemCard key={index} items={item} />)}
      </div>
    </>
  );
}

export default Homepage;
