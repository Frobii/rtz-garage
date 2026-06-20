import { useParams } from "react-router-dom";
import { useProducts } from "../../features/product/ProductContext";
import ImageSelector from "../../components/ui/ImageSelector";
import styles from "./Product.module.css";
import CartButton from "../../features/cart/CartButton";

function formatAccessories(accessories) {
  let returnString = "Includes ";
  accessories.forEach((e, i) => {
    returnString = returnString + e;
    if (!((accessories.length - 1) === i)) {
      returnString = returnString + " + ";
    }
  });
  return returnString;
}

function formatWheelSpecs(specs) {
  const formatIndex = (index) =>
    `${specs.diameter[index]} x ${specs.width[index]}, ET${specs.offset[index]}, ${specs.centreBore}`;

  if (specs.diameter.length > 1) {
    return `Front: ${formatIndex(0)}\nRear: ${formatIndex(specs.offset.length - 1)}`;
  }

  return formatIndex(0);
}

function Product() {
  const { productId } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error loading product: {error}</p>;

  const product = products.find(p => p.id === productId);

  if (!product) return <p>Product not found!</p>;

  return (
    <div className={styles.productDetails}>
      <div className={styles.productHeader}>
        <h1>{product.brand} {product.model}</h1>
      </div>
      <div className={styles.productInfo}>
        {(product.specs && product.category === "wheels") &&
          <p className={styles.specs}>{formatWheelSpecs(product.specs)}</p>
        }
        <p className={styles.description}>
          {product.description}
        </p>
        {product.accessories &&
          <p className={styles.accessories}>{formatAccessories(product.accessories)}</p>
        }
      </div>
      <ImageSelector product={product} size={"28rem"}/>
      <div
        className={styles.purchaseContainer}
        style={{ width: "28rem"}}
      >
        <p>${product.price}</p>
        <CartButton product={product} size={"28rem"}/>
      </div>
    </div>
  );
}

export default Product;
