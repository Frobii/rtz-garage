import styles from "./CartItem.module.css";
import PropTypes from "prop-types";
import QuantitySelector from "../../components/ui/QuantitySelector";
import { useCart } from "../../features/cart/CartContext";
import Icon from "@mdi/react";
import { mdiDeleteForever } from "@mdi/js";

function CartItem({ item }) {
  const {removeItem} = useCart();
  const product = item.product;

  return (
    <div className={styles.cartItem }>
      <button
        className={`linkButton ${styles.removeItem}`}
        onClick={() => removeItem(product.id)}
      >
        <Icon path={mdiDeleteForever} size={1} />
      </button>
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
