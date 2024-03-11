import React from "react";
import { Link } from "react-router-dom";

function Nav({ isOpen, toggleMenu }) {
  return (
    <React.Fragment>
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <header className="nav-header">
          <button className="nav-back"></button>
          <button className="nav-close" onClick={toggleMenu}>
            <img src="/icons/menu-open.png" alt="Close navigation window" />
          </button>
        </header>
        <ul>
          <li>
            <Link to="/products/tech">Tech</Link>
          </li>
          <li>
            <Link to="/products/clothes-shoewear">Clothes & shoewear</Link>
          </li>
          <li>
            <Link to="/products/food-supplements">Food & supplements</Link>
          </li>

          <li>
            <Link to="/products/perfume">Perfume</Link>
          </li>

          <li>
            <Link to="/products/toys">Toys</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
export default Nav;
