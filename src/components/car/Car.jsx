import TableItem from "../tableItem/TableItem";
import "./car.css";

const Car = () => {
  return (
    <section className="section__car">
      <h3 className="car__title">Check your Car</h3>
      <table className="car__table">
        <tr className="table__head">
          <th>Product</th>
          <th>Price</th>
          <th>Items</th>
          <th>Amount</th>
        </tr>
        <TableItem />
      </table>
      <p className="car__total">Total: 1581.5</p>
    </section>
  );
};

export default Car;
