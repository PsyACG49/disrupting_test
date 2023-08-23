import Count from "../count/Count";
import "./productDetails.css";
const ProductDetails = () => {
  return (
    <section className="section__productDetails">
      <div className="productDetails__image">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="product"
          loading="lazy"
          className="image__img"
        />
      </div>
      <div className="productDetails__details">
        <h3 className="details__title">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h3>
        <p className="details__description">
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <span className="details__price">$109.95</span>
        <Count />
        <button className="details__addBtn">Add to card</button>
      </div>
    </section>
  );
};

export default ProductDetails;
