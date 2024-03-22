import React, { useRef } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";
import DesktopNavigationBottom from "./DesktopNavigationBottom";

function Header() {
  const searchRef = useRef(null);

  const focusSearchbar = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <React.Fragment>
      <header>
        <div className="banner">
          <Link to="/" title="Home" className="banner-logo">
            <img src="/images/ecom-logo.png" alt="Brand Logo" />
          </Link>
          <Searchbar ref={searchRef} />
          <MobileNavigation onSearchClick={focusSearchbar} />
          <DesktopNavigation />
          <DesktopNavigationBottom />
        </div>
      </header>
      {/* <hr className="hr-break hr-desktop" /> */}
    </React.Fragment>
  );
}

export default Header;
