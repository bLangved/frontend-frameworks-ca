import React, { forwardRef } from "react";

const Searchbar = forwardRef(({ onChange }, ref) => {
  return (
    <div className="searchbar">
      <input ref={ref} type="text" placeholder="Search" onChange={onChange} />
    </div>
  );
});

export default Searchbar;
