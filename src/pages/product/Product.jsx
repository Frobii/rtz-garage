import { useParams } from "react-router-dom";
import { useProducts } from "../../features/product/ProductContext";
import ImageSelector from "../../components/ui/ImageSelector";
import styles from "./Product.module.css";

function Product() {
  const { productId } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  const product = products.find(p => p.id === productId);

  if (!product) return <p>Product not found!</p>;

  return (
    <div className={styles.productDetails}>
      <h1>{product.brand} {product.model}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <ImageSelector product={product}/>
    </div>
  );
}

export default Product;
