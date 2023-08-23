import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/products";

const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setDataProducts(data));
  }, []);

  const datos = {
    dataProducts,
  };

  return <dataContext.Provider value={datos}>{children}</dataContext.Provider>;
};

export { DataProvider, dataContext };
