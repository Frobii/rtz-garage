import { useProducts } from "./ProductContext";

const ProductList = () => {
  const { products, loading, error } = useProducts();

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error loading products: {error}</div>;
  }

  return (
    <div>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.brand} {product.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;