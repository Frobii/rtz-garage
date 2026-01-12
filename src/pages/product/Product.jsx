import { useParams } from "react-router-dom";
import { useProducts } from "../../features/product/ProductContext";

function Product() {
  const { productId } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  const product = products.find(p => p.id === productId);

  if (!product) return <p>Product not found!</p>;

  return (
    <div>
      <h1>{product.brand} {product.model}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      {/* render detailed product card, Add to Cart button, etc here */}
    </div>
  );
}

export default Product;
