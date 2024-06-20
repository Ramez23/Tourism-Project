import React, { createContext, useContext, useState } from "react";

const TourContext = createContext(null);

export const useTour = () => useContext(TourContext);

export const TourProvider = ({ children }) => {
  const [Tour, setTour] = useState(null);

  const logout = () => {
    setTour(null); // Clear tour guide from context
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear JWT cookie
  };

  return (
    <TourContext.Provider value={{ Tour, setTour, logout }}>
      {children}
    </TourContext.Provider>
  );
};
