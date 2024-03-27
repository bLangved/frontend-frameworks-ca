import React, { useEffect, useState } from "react";
import Nav from "../../Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState(faBars);

  useEffect(() => {
    if (isOpen) {
      setMenuIcon(faXmark);
    } else {
      setMenuIcon(faBars);
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <button className="hamburger-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuIcon} size="lg" />
        Products
      </button>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
    </React.Fragment>
  );
}

export default HamburgerMenu;
