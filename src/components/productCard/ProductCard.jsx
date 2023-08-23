import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = () => {
  return (
    <Link to="details/1" className="productCard">
      <img
        src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        alt="product item"
        loading="lazy"
        className="productCard__img"
      />
      <div className="productCard__info">
        <div className="info__top">
          <h3 className="top__title">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h3>
          <span className="top__price">$109.95</span>
        </div>
        <span className="info__category">men's clothing</span>
      </div>
    </Link>
  );
};

export default ProductCard;
