import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../../../contexts/CartContext";

function DesktopNavigation() {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <React.Fragment>
      <section className="desktop-navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} size="lg" />
                Home
              </Link>
            </li>
            <li className="cart-list">
              <Link to="/checkout">
                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
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
export default DesktopNavigation;
