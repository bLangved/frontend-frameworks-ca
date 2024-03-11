import React, { forwardRef } from "react";

const Searchbar = forwardRef((props, ref) => {
  return (
    <div className="searchbar">
      <input ref={ref} type="text" placeholder="Search" />
    </div>
  );
});

export default Searchbar;
