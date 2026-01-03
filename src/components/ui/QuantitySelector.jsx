import PropTypes from "prop-types";
import styles from "./QuantitySelector.module.css";
import Icon from "@mdi/react";
import { mdiPlus, mdiMinus } from "@mdi/js";
import { useCart } from "../../features/cart/CartContext";

function QuantitySelector({ item }) {
  const product = item.product;
  let quantity = item.qtyInCart;

  const { updateQuantity } = useCart();

  const handleClick = (action) => {
    if (action === "+") {
      quantity += 1;
      updateQuantity(product.id, quantity);
    } else if (action === "-") {
      quantity -= 1;
      updateQuantity(product.id, quantity);
    }
  };

  return (
    <div className={styles.quantitySelector}>
      <Icon onClick={() => handleClick("-")} className={styles.quantityMinus} path={mdiMinus} size={1} />
      <div className={styles.quantityEntry}>
        {quantity}
      </div>
      <Icon onClick={() => handleClick("+")} className={styles.quantityPlus} path={mdiPlus} size={1} />
    </div>
  );
}

QuantitySelector.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }).isRequired,
    qtyInCart: PropTypes.number.isRequired,
  }).isRequired,
};

export default QuantitySelector;
