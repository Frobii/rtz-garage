import PropTypes from "prop-types";
import styles from "./ProductCard.module.css";
import ImageCarousel from "../../components/ui/ImageCarousel";
import { Link } from "react-router-dom";
import CartButton from "../cart/CartButton";

function ProductCard({ product, size="8rem" }) {
  return (
    <div className={styles.productWrapper}>
      <div className={`${styles.productHeader} nonSelectable`}>
        <Link
          key={product.id}
          to={`/shop/product/${product.id}`}
        >
          {/* consider if this should remain a h2 when using this component for future applications */}
          <h2 className={styles.productHeading}>
            {product.brand} {product.model}
          </h2>
          <p className={styles.productHeading}>
            ${product.price}
          </p>
        </Link>
      </div>
      <ImageCarousel product={product} size={size}/>
      <CartButton product={product} size={size}/>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.string
};

export default ProductCard;
