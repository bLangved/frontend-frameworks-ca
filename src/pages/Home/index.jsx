import React from "react";
import ProductCardFocus from "./ProductCardFocus";
import ProductCardFocus2 from "./ProductCardFocus2";
import ProductCards from "./ProductCards";
import ProductCardsOffers from "./ProductCardsOffers";

function Home() {
  return (
    <React.Fragment>
      <div className="hero-wrapper">
        <section className="hero">
          <h1 className="hero-title">
            <span>Simplified</span>
            <span>shopping</span>
          </h1>
          <img
            className="hero-image"
            src="/images/ecom-logo-default.png"
            alt="Store logo"
          />
        </section>
      </div>
      <section className="promo-section">
        <h2>We recommend</h2>
      </section>
      <div className="cards-focus-wrapper">
        <ProductCardFocus />
        <ProductCardFocus2 />
      </div>
      <section className="promo-section">
        <h2>This week's offers!</h2>
        <span>%</span>
      </section>
      <ProductCardsOffers />
      <section className="promo-section">
        <h2>All our products</h2>
      </section>
      <ProductCards />
    </React.Fragment>
  );
}

export default Home;
