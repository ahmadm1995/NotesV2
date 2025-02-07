import React, { createContext, useContext, useEffect, useState } from "react";

// Create the Notes Context
const NotesContext = createContext();

// Provider to manage notes and provide fetch functionality
export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch notes from the API
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/notes");

      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }

      const data = await response.json();
      setNotes(data);  // Set notes in state
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <NotesContext.Provider value={{ notes, loading, error, fetchNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

// Custom hook to access notes from context
export const useNotes = () => useContext(NotesContext);
