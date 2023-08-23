import { useContext } from "react";
import ProductDetails from "../components/productDetails/ProductDetails";
import { dataContext } from "../context/dataContext";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { product } = useParams();
  const { dataProducts } = useContext(dataContext);
  const currentProduct = dataProducts.find(
    (el) => el.id === parseInt(product, 10)
  );
  return <ProductDetails data={currentProduct} />;
};

export default DetailsPage;
