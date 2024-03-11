import React from "react";
import { Link } from "react-router-dom";

function DesktopNavigationBottom() {
  return (
    <React.Fragment>
      <section className="desktop-navigation-bottom">
        <nav>
          <ul>
            <li>
              <Link to="/products/tech">Tech</Link>
            </li>
            |
            <li>
              <Link to="/products/clothes-shoewear">Clothes & shoewear</Link>
            </li>
            |
            <li>
              <Link to="/products/food-supplements">Food & supplements</Link>
            </li>
            |
            <li>
              <Link to="/products/perfume">Perfume</Link>
            </li>
            |
            <li>
              <Link to="/products/toys">Toys</Link>
            </li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}
export default DesktopNavigationBottom;
