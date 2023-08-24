import ProductCard from "../productCard/ProductCard";

import "./products.css";

const Products = ({ data }) => {
  return (
    <section className="section__products">
      <h2 className="products__title">Look all our products</h2>
      <div className="products__list">
        {data.map((el) => (
          <ProductCard key={el.id} productInfo={el} />
        ))}
      </div>
    </section>
  );
};

export default Products;
