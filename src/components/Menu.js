import React from "react";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
      <ul className="menu__list">
        <li className="menu__list-item menu__list-item--one">
          <NavLink activeClassName="active" to="/search">
            Search books
          </NavLink>
        </li>
        <li className="menu__list-item menu__list-item--two">
          <NavLink activeClassName="active" to="/mybooks">
            My books
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
