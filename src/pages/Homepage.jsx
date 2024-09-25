import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { items } from "@/utils/items";
import Navbar from "@/services/Navbar";
import ItemCard from "@/services/ItemCard";

function Homepage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-center w-fullpt-10 gap-4 mt-10 p-1">
        {items.map((item, index) => (
          <ItemCard key={index} items={item} />
        ))}
      </div>
    </>
  );
}

export default Homepage;
