import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function MobileNavigation({ onSearchClick }) {
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
export default MobileNavigation;
