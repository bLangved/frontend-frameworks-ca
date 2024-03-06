import React, { useState } from "react";
import Nav from "../Nav";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="banner-nav-wrapper">
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>
      <Nav isOpen={isOpen} />
    </div>
  );
}

export default HamburgerMenu;
