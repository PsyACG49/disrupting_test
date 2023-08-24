import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import TableItem from "../tableItem/TableItem";

import "./cart.css";

const Cart = ({ data }) => {
  const { cart } = useContext(cartContext);
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.count * curr.price,
    0
  );

  localStorage.setItem("cart", JSON.stringify(cart));
  return (
    <section className="section__car">
      <h3 className="car__title">Check your Car</h3>
      <table className="car__table">
        <thead>
          <tr className="table__head">
            <th>Product</th>
            <th>Price</th>
            <th>Items</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <TableItem infoItem={el} key={el.id} />
          ))}
        </tbody>
      </table>
      <p className="car__total">{`Total: ${totalPrice.toFixed(2)}`}</p>
    </section>
  );
};

export default Cart;
