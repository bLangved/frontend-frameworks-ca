import React, { useState } from "react";
import Nav from "../Nav";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <button className="hamburger-button" onClick={toggleMenu}>
        <img src="/icons/menu-closed-white.png" alt="" />
        Products
      </button>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
    </React.Fragment>
  );
}

export default HamburgerMenu;
