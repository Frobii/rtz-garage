import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/products.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === null) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
