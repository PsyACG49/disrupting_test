import Count from "../count/Count";
import "./tableItem.css";
const TableItem = () => {
  return (
    <tr className="table__itemRow">
      <td>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</td>
      <td align="center">$109.95</td>
      <td align="center">
        <Count />
      </td>
      <td align="center">809.95</td>
    </tr>
  );
};

export default TableItem;
