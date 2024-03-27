import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../../contexts/CartContext";
import HamburgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function MobileNavigation({ onSearchClick }) {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <React.Fragment>
      <section className="mobile-navigation">
        <nav>
          <ul>
            <li>
              <HamburgerMenu />
            </li>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
            <li>
              <button onClick={onSearchClick}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </button>
            </li>
            <li className="cart-list">
              <Link to="/checkout">
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart
                {totalQuantity > 0 && (
                  <div className="cart-badge">
                    <span>{totalQuantity}</span>
                  </div>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}
export default MobileNavigation;
