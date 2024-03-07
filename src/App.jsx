// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation/Navigation";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { ShoppingCartPage } from "./Pages/ShoppingCartPage/ShoppingCartPage";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<ShopPage />} />
          {/* <Route path="/catalog" element={<Catalog />} /> */}
          <Route path="/shopping_cart" element={<ShoppingCartPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
