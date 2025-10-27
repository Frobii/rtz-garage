import styles from "./Cart.module.css";
import PropTypes from "prop-types";

function CartItem({ item }) {
  const product = item.product;
  const quantity = item.qtyInCart;

  return (
    <div className={styles.cartItem}>
      {product.id}
      {quantity}
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default CartItem;
