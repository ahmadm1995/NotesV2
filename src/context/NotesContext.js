// /context/NotesContext.js

import React, { createContext, useContext } from "react";
import { testData } from "../library/data";  // Importing your test data

// Create a Context
const NotesContext = createContext();

// Create a Provider to wrap around components that need access to notes
export const NotesProvider = ({ children }) => {
  return (
    <NotesContext.Provider value={{notes:testData }}>
      {children}
    </NotesContext.Provider>
  );
};

// Custom hook to access notes in any component
export const useNotes = () => useContext(NotesContext);
