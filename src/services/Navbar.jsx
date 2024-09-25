import React, { useEffect, useState } from "react";
import ThemeToggleButton from "../ThemeToggltButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useUser from "../store/useUser";
import { LucideShoppingBag, Search } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();

  const user = useUser((state) => state.user);
  const logout = useUser((state) => state.logout);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (user) setIsLogged(true);
    else setIsLogged(false);
  }, [user]);

  const handleSearch = () => {
    // navigate("/search");
  };

  return (
    <div
      className="flex items-center justify-between px-8 py-2 backdrop-blur-lg border-b-2 border-gray-200 dark:border-white
        "
    >
      <p onClick={() => navigate("/")} className="text-3xl cursor-pointer p-0">
        TARC
      </p>
      <div className="flex gap-4 items-center">
        <Button variant="outline" size="icon" onClick={() => navigate("/cart")}>
          <Search size={24} />
        </Button>
        <Button variant="outline" size="icon" onClick={handleSearch}>
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
  );
}

export default Navbar;
