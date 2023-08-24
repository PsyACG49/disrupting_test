import { useContext } from "react";
import "./tableItem.css";
import { cartContext } from "../../context/cartContext";
const TableItem = ({ infoItem }) => {
  const { setCart } = useContext(cartContext);
  const { title, price, id, count } = infoItem;
  const currentAmount = count * price;

  const handleAddToCar = () => {
    setCart((items) => {
      const isFound = items.find((item) => item.id === id);
      if (isFound) {
        return items.map((item) => {
          if (item.id === id) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleLessToCar = () => {
    setCart((items) => {
      const isFound = items.find((item) => item.id === id);
      if (isFound) {
        return items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <tr className="table__itemRow">
      <td>{title}</td>
      <td align="center">{`$${price.toFixed(2)}`}</td>
      <td align="center">
        <div className="details__count">
          <button
            className="count__btn"
            disabled={count < 2 ? true : false}
            onClick={handleLessToCar}
          >
            -
          </button>
          <span>{count}</span>
          <button className="count__btn" onClick={handleAddToCar}>
            +
          </button>
        </div>
      </td>
      <td align="center">{`$${currentAmount.toFixed(2)}`}</td>
    </tr>
  );
};

export default TableItem;
