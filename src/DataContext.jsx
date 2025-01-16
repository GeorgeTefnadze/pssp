import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create the Context
const DataContext = createContext();

// Create the Provider Component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost/api.php"); // Replace with your API endpoint
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs once on mount

  // Provide the state and methods to children
  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the DataContext
export const useDataContext = () => {
  return useContext(DataContext);
};
