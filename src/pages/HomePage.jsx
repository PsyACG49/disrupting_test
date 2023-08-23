import { useContext } from "react";
import { dataContext } from "../context/dataContext";
import Products from "../components/products/Products";

const HomePage = () => {
  const { dataProducts } = useContext(dataContext);

  return (
    <>
      <Products data={dataProducts} />
    </>
  );
};

export default HomePage;
