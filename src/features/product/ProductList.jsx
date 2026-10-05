import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import { useProducts } from "./ProductContext";
import ProductCard from "./ProductCard.jsx";
import HorizontalScroll from "../../components/ui/HorizontalScroll.jsx";

const sorters = {
  newest: (a, b) => b.uploadDate.localeCompare(a.uploadDate),
  oldest: (a, b) => a.uploadDate.localeCompare(b.uploadDate),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

const ProductList = ({ category, horizontal = false, sort = "none"} ) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  const filteredProducts = category === "all"
    ? products
    : products.filter(p => p.category === category);

  if (!filteredProducts.length) {
    return <div>There are currently no {category} products, check back soon!</div>;
  }

  const compare = sorters[sort];
  const sortedProducts = compare ? [...filteredProducts].sort(compare) : filteredProducts;

  const cards = sortedProducts.map(product => (
    <ProductCard key={product.id} product={product} size="12rem" />
  ));

  return horizontal ? (
    <HorizontalScroll className={styles.productList}>{cards}</HorizontalScroll>
  ) : (
    <ul className={styles.productList}>{cards}</ul>
  );
};

ProductList.propTypes = {
  category: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  sort: PropTypes.string
};

export default ProductList;
