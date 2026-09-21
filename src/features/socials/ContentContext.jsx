import { createContext,  useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/content.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setContent(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
}

ContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === null) {
    throw new Error("useContent must be used within a ContentProvider");
  }
  return context;
};
