import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import CartPage from "./pages/CartPage";
import Layout from "./layouts/Layout";
import { DataProvider } from "./context/dataContext";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <DataProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="details/:product" element={<DetailsPage />} />
              <Route path="car" element={<CartPage />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </DataProvider>
  );
}

export default App;
