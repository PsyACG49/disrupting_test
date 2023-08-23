import { BsCartFill } from "react-icons/bs";

import "./header.css";

const Header = () => {
  return (
    <header className="section__header">
      <h2 className="header__logo">New Market</h2>
      <div className="header__car">
        <div className="car__badge">
          <span>2</span>
        </div>
        <BsCartFill className="car__icon" />
      </div>
    </header>
  );
};

export default Header;
