import { BsCartFill } from "react-icons/bs";

import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="section__header">
      <Link to="/">
        <h2 className="header__logo">New Market</h2>
      </Link>
      <Link to="/car" className="header__car">
        <div className="car__badge">
          <span>2</span>
        </div>
        <BsCartFill className="car__icon" />
      </Link>
    </header>
  );
};

export default Header;
