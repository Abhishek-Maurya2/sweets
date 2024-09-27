import React, { useEffect, useState } from "react";
import ThemeToggleButton from "../ThemeToggltButton";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import useUser from "../store/useUser";
import { LucideShoppingBag, Search } from "lucide-react";

const SearchModal = () => {
  return (
    <div className="h-screen w-full z-50">
      <div className="flex items-center border-b-2 border-gray-200 dark:border-white">
        <input
          type="text"
          placeholder="Search Here..."
          className="w-full h-10 p-2 "
        />
        <button className="p-2">
          <Search size={24} />
        </button>
      </div>

      {/* res */}

      <div>
        <div className="flex gap-2 p-2 border m-1 rounded-xl">
          <img
            src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
            className="w-20 h-20 object-cover rounded-lg"
          />
          <div>
            <p>Product Name</p>
            <p>price</p>
          </div>
        </div>
      </div>

    </div>
  );
};

function Navbar() {
  const navigate = useNavigate();

  const user = useUser((state) => state.user);
  const logout = useUser((state) => state.logout);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (user) setIsLogged(true);
    else setIsLogged(false);
  }, [user]);

  const [searchModal, setSearchModal] = useState(false);
  const handleSearch = () => {
    setSearchModal(!searchModal);
  };

  return (
    <>
      {searchModal ? (
        <SearchModal />
      ) : (
        <div className="flex items-center justify-between px-8 py-2 backdrop-blur-lg border-b-2 border-gray-200 dark:border-white">
          <p
            onClick={() => navigate("/")}
            className="text-3xl cursor-pointer p-0"
          >
            TARC
          </p>
          <div className="flex gap-4 items-center">
            <Button variant="outline" size="icon" onClick={handleSearch}>
              <Search size={24} />
            </Button>
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
      )}
    </>
  );
}

export default Navbar;
