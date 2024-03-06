import React from "react";
import HamburgerMenu from "./HamburgerMenu";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <header>
        <Link to="/" title="Home" className="banner-logo">
          <img
            src="https://wilsonclinic.com/wp-content/uploads/2018/12/placeholder-logo-2.png"
            alt="Brand Logo"
          />
        </Link>
        <Searchbar />
        <HamburgerMenu />
      </header>
    </React.Fragment>
  );
}

export default Header;
