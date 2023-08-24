import { createContext, useEffect, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const isLocalCart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    if (isLocalCart === null) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      setCart(isLocalCart);
    }
  }, []);

  const datos = {
    cart,
    setCart,
  };
  return <cartContext.Provider value={datos}>{children}</cartContext.Provider>;
};

export { CartProvider, cartContext };
