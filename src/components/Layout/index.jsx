import React from "react";
import Header from "./Header/";
import Footer from "./Footer/";
import { Outlet } from "react-router-dom";
import { useOverlay } from "../../contexts/OverlayContext";

function Layout() {
  const { isOverlayVisible } = useOverlay();
  return (
    <>
      <Header />
      <main>
        <div className={`overlay ${isOverlayVisible ? "show" : ""}`}></div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
