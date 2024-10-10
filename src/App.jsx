import { useEffect } from "react";
import useThemeStore from "./store/useThemeStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart.jsx";
import OrderPage from "./pages/OrderPage";

function App() {
  const { theme } = useThemeStore();
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
