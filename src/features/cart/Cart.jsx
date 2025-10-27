import { useState } from "react";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";
import CartItem from "./CartItem";

function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <div className={styles.cartWrapper}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.cartButton}>
        <Icon path={mdiCartOutline} size={1} />
      </button>

      {isOpen && (
        <div className={styles.cartDropdown}>
          <p>This is your cart</p>
          {cartItems.map((item =>
            <CartItem key={item.product.id} item={item}/>
          ))}
          <button>
            <Link to="checkout">Checkout</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
