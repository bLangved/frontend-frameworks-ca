import React, { createContext, useContext, useState } from "react";

const OverlayContext = createContext();

export const useOverlay = () => useContext(OverlayContext);

export const OverlayProvider = ({ children }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const showOverlay = () => setIsOverlayVisible(true);
  const hideOverlay = () => setIsOverlayVisible(false);

  return (
    <OverlayContext.Provider
      value={{ isOverlayVisible, showOverlay, hideOverlay }}
    >
      {children}
    </OverlayContext.Provider>
  );
};
