import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.cartWrapper}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.cartButton}>
        <Icon path={mdiCartOutline} size={1} />
      </button>

      {isOpen && (
        <div className={styles.cartDropdown}>
          <p>This is your cart</p>
          <button>
            <Link to="checkout">Checkout</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
