import styles from "./CartItem.module.css";
import PropTypes from "prop-types";
import QuantitySelector from "../../components/ui/QuantitySelector";

function CartItem({ item }) {
  const product = item.product;

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.productImage}
        src={product.images[0]}
        alt={`${product.brand} ${product.model}`}
      />
      <div className = {styles.productInfo}>
        <p className={styles.productName}>{product.brand} {product.model}</p>
        {product.singleStockItem ? (
          <p>${product.price}</p>
        ) : (
          <div className={styles.priceAndQuantity}>
            <p>${product.price}</p>
            <QuantitySelector item={item} />
          </div>
        )
        }
      </div>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartItem;
