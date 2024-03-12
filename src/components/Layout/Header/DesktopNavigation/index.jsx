import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function DesktopNavigation() {
  return (
    <React.Fragment>
      <section className="desktop-navigation">
        <nav>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHouse} />
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                Search
              </Link>
            </li> */}
            <li>
              <Link to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </React.Fragment>
  );
}
export default DesktopNavigation;
