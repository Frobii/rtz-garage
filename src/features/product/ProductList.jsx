import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import { useProducts } from "./ProductContext";
import ProductCard from "./ProductCard.jsx";

const ProductList = ({ category }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  const filteredProducts = category === "all"
    ? products
    : products.filter(p => p.category === category);

  if (!filteredProducts.length) {
    return <div>There are currently no {category} products, check back soon!</div>;
  }

  return (
    <ul className={styles.productList}>
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} size="12rem"/>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductList;
