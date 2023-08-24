import { useContext, useState } from "react";
import "./productDetails.css";
import { cartContext } from "../../context/cartContext";
const ProductDetails = ({ data }) => {
  const { image, title, description, price, id } = data;
  const { cart, setCart } = useContext(cartContext);
  const prevAdded = cart.find((el) => el.id === id);
  const [count, setCount] = useState(prevAdded ? prevAdded.count : 0);

  const handleAddCart = () => {
    const filterData = cart.filter((el) => el.id !== id);
    const toCart = {
      id,
      title,
      price,
      count,
    };
    setCart([...filterData, toCart]);
    localStorage.setItem("cart", "hola");
  };
  return (
    <section className="section__productDetails">
      <div className="productDetails__image">
        <img src={image} alt="product" loading="lazy" className="image__img" />
      </div>
      <div className="productDetails__details">
        <h3 className="details__title">{title}</h3>
        <p className="details__description">{description}</p>
        <span className="details__price">{`$${price}`}</span>
        <div className="details__count">
          <button
            className="count__btn"
            disabled={count < 1 ? true : false}
            onClick={() => setCount(count - 1)}
          >
            -
          </button>
          <span>{count}</span>
          <button className="count__btn" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
        <button
          className="details__addBtn"
          disabled={count < 1 ? true : false}
          onClick={handleAddCart}
        >
          Add to card
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
