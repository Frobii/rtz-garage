import styles from "./CartItem.module.css";
import PropTypes from "prop-types";
import QuantitySelector from "../../components/ui/QuantitySelector";
import { useCart } from "../../features/cart/CartContext";
import Icon from "@mdi/react";
import { mdiDeleteForever } from "@mdi/js";
import { Link } from "react-router-dom";

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
      <Link
        key={product.id}
        to={`/shop/product/${product.id}`}
      >
        <img
          className={styles.productImage}
          src={product.images[0]}
          alt={`${product.brand} ${product.model}`}
        />
      </Link>
      <div className = {styles.productInfo}>
        <Link
          key={product.id}
          to={`/shop/product/${product.id}`}
        >
          <p className={styles.productName}>{product.brand} {product.model}</p>
        </Link>
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
