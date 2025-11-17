import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const product = item.product;
  const quantity = item.qtyInCart;

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.productImage}
        src={product.images[0]}
        alt={`${product.brand} ${product.model}`}
      />
      <div className = {styles.productInfo}>
        <p>{product.brand} {product.model}</p>
        {product.singleStockItem ? (
          <p>${product.price}</p>
        ) : (
          <p>{quantity} x ${product.price}</p>
          /*TODO: add increment/decrement buttons */
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
