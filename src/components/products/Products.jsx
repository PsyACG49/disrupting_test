import ProductCard from "../productCard/ProductCard";
import "./products.css";
const Products = () => {
  return (
    <section className="section__products">
      <h2 className="products__title">Look all our products</h2>
      <div className="products__list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default Products;
