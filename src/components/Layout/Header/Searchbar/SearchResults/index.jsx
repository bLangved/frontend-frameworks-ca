import React from "react";
import { Link } from "react-router-dom";

function SearchResults({ item, onClick }) {
  return (
    <Link to={`/product/${item.id}`} key={item.id} onClick={onClick}>
      <li className="search-item">
        <img src={item.image.url} alt={item.image.alt} />
        <span className="search-title">{item.title}</span>
        <div className="search-price-wrapper">
          {item.discountedPrice !== item.price && (
            <>
              <div className="search-price-container">
                <span className="search-price-discounted">
                  Before: {item.price},-
                </span>
                <span className="search-price">
                  Now: {item.discountedPrice},-
                </span>
              </div>
            </>
          )}
          {item.discountedPrice === item.price && (
            <>
              <span className="search-price">{item.discountedPrice},-</span>
            </>
          )}
        </div>
      </li>
      <hr className="hr-break" />
    </Link>
  );
}
export default SearchResults;
