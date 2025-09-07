import PropTypes from "prop-types";
import { useProducts } from "./ProductContext";

const ProductList = ({ category }) => {
  const { products, loading, error } = useProducts();

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  const filteredProducts = products.filter(p => p.category === category);

  if (!filteredProducts.length) {
    return <div>There are currently no {category} products, check back soon!</div>;
  }

  return (
    <div>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.brand} {product.model}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ProductList;
