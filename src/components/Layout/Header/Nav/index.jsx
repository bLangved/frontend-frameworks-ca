import React from "react";
import { Link } from "react-router-dom";

function Nav({ isOpen }) {
  return (
    <React.Fragment>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default Nav;
