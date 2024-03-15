import React, { useState, useEffect, forwardRef } from "react";
import Searchbar from "../Searchbar";
import useApiSearch from "../../../../hooks/useApiSearch";
import { Link } from "react-router-dom";

const SearchController = forwardRef((props, ref) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);
  const apiBaseUrl = "https://v2.api.noroff.dev/online-shop/?search=";
  const { data, isLoading, isError } = useApiSearch(apiBaseUrl, query);

  useEffect(() => {
    setShowResults(!!query);
  }, [query]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const closeSearchResults = (e) => {
    setShowResults(false);
    setQuery((e.target.value = ""));
  };

  return (
    <div>
      <Searchbar ref={ref} onChange={handleSearchChange} />
      <section
        className={`search-results-container ${query.length > 0 ? "show" : ""}`}
      >
        {showResults && isLoading && (
          <div className="search-alert">
            <p>Loading...</p>
          </div>
        )}
        {showResults && isError && (
          <div className="search-alert">
            <p>Error fetching data</p>
          </div>
        )}
        <button className="search-close" onClick={closeSearchResults}>
          X
        </button>
        {showResults && !isLoading && !isError && data && data.length > 0 && (
          <ul className="search-results">
            {data.map((item) => (
              <Link
                to={`/product/${item.id}`}
                key={item.id}
                onClick={closeSearchResults}
              >
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
                        <span className="search-price">
                          {item.discountedPrice},-
                        </span>
                      </>
                    )}
                  </div>
                </li>
                <hr className="hr-break" />
              </Link>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
});

export default SearchController;
