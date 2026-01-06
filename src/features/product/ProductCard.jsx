import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import ImageCarousel from "../../components/ui/ImageCarousel";
import Button from "../../components/ui/Button";
import { mdiCartPlus } from "@mdi/js";
import { useCart } from "../cart/CartContext.jsx";
import { Link } from "react-router-dom";

function ProductCard({ product, size="8rem" }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
  };

  return (
    <div className={styles.productWrapper}>
      <div className={`${styles.productHeader} nonSelectable`}>
        <Link
          key={product.id}
          to={`/shop/product/${product.id}`}
        >
          <p>{product.brand} {product.model}</p>
          <p>${product.price}</p>
        </Link>
      </div>
      <ImageCarousel product={product} size={size}/>
      <Button
        iconPath={mdiCartPlus}
        title="Add to Cart"
        width={size}
        onClick={handleAddToCart}
      />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string
};

export default ProductCard;
