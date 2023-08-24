import { Link } from "react-router-dom";

import "./productCard.css";

const ProductCard = ({ productInfo }) => {
  const { title, price, category, image, id } = productInfo;
  return (
    <Link to={`details/${id}`} className="productCard">
      <img
        src={image}
        alt="product item"
        loading="lazy"
        className="productCard__img"
      />
      <div className="productCard__info">
        <div className="info__top">
          <h3 className="top__title">{title}</h3>
          <span className="top__price">{`$${price}`}</span>
        </div>
        <span className="info__category">{category}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
