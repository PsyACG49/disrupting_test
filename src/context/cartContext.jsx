import { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const datos = {
    cart,
    setCart,
  };
  return <cartContext.Provider value={datos}>{children}</cartContext.Provider>;
};

export { CartProvider, cartContext };
