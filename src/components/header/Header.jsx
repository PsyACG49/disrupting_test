import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

import "./header.css";

const Header = () => {
  const { cart } = useContext(cartContext);
  const countBadge = cart.reduce((acc, curr) => {
    return acc + curr.count;
  }, 0);

  return (
    <header className="section__header">
      <Link to="/">
        <h2 className="header__logo">New Market</h2>
      </Link>
      <Link to="/car" className="header__car">
        <div className="car__badge">
          <span>{countBadge}</span>
        </div>
        <BsCartFill className="car__icon" />
      </Link>
    </header>
  );
};

export default Header;
