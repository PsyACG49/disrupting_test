import Count from "../count/Count";
import "./productDetails.css";
const ProductDetails = ({ data }) => {
  const { image, title, description, price, id } = data;
  return (
    <section className="section__productDetails">
      <div className="productDetails__image">
        <img src={image} alt="product" loading="lazy" className="image__img" />
      </div>
      <div className="productDetails__details">
        <h3 className="details__title">{title}</h3>
        <p className="details__description">{description}</p>
        <span className="details__price">{`$${price}`}</span>
        <Count />
        <button className="details__addBtn">Add to card</button>
      </div>
    </section>
  );
};

export default ProductDetails;
