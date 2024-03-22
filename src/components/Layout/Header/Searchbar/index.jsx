import React, { useState, useEffect, forwardRef } from "react";
import useApi from "../../../../hooks/useApi";
import { SEARCH_ENDPOINT } from "../../../../constants/apiUrls";
import SearchResults from "./SearchResults";
import { useDebouncedState } from "../../../utils";
import { useOverlay } from "../../../../contexts/OverlayContext";

const Searchbar = forwardRef((props, ref) => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(true);
  const { data, isLoading, isError } = useApi(SEARCH_ENDPOINT, query);

  useEffect(() => {
    setShowResults(!!query);
  }, [query]);

  const { showOverlay, hideOverlay } = useOverlay();

  useEffect(() => {
    if (query) {
      showOverlay();
    } else {
      hideOverlay();
    }
  }, [query, showOverlay, hideOverlay]);

  const debouncedSetQuery = useDebouncedState(setQuery, 300);
  const handleSearchChange = (e) => {
    debouncedSetQuery(e.target.value);
  };

  const closeSearchResults = () => {
    setShowResults(false);
    setQuery("");
  };

  return (
    <>
      <form role="search" action="/search" className="searchbar">
        <label htmlFor="query" className="visually-hidden">
          Search the store
        </label>
        <input
          ref={ref}
          type="text"
          placeholder="Search"
          id="query"
          aria-label="Search through site content"
          onChange={handleSearchChange}
        />
      </form>
      <section
        className={`search-results-container ${query.length > 0 ? "show" : ""}`}
      >
        {showResults && isLoading && <div className="loader"></div>}
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
              <SearchResults
                key={item.id}
                item={item}
                onClick={closeSearchResults}
              />
            ))}
          </ul>
        )}
      </section>
    </>
  );
});

export default Searchbar;
