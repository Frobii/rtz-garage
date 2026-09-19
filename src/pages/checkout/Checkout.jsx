import { useEffect } from "react";
import styles from "./Checkout.module.css";
import { useCart } from "../../features/cart/CartContext.jsx";

function CheckoutItem( { item } ) {
  const product = item.product;

  return <div className={styles.checkoutItem}>
    <img
      className={styles.productImage}
      src={product.images[0]}
      alt={`${product.brand} ${product.model}`}
    />
    <div className = {styles.productInfo}>
      <p className={styles.productName}>{product.brand} {product.model}</p>
      <div className={styles.productCalculation}>
        <p>${product.price} × {item.qtyInCart}</p>
        <p>${(product.price * item.qtyInCart).toFixed(2)}</p>
      </div>
    </div>
  </div>;
}

function CheckoutList() {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return <p className={styles.emptyMessage}>Your cart is empty.</p>;
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qtyInCart,
    0
  );

  return(
    <div className={styles.checkout}>
      <div className={styles.checkoutList}>
        {cartItems.map((item =>
          <div key={item.product.id}>
            <CheckoutItem item={item}/>
          </div>
        ))}
      </div>
      <div className={styles.checkoutTotal}>
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

function Checkout() {
  useEffect(() => {
    document.title = "Checkout | RTZ Garage";

    return () => {
      document.title = "RTZ Garage";
    };
  });

  return (
    <>
      <h1 className={styles.checkoutHeading}>Checkout</h1>
      <CheckoutList/>
    </>
  );
}

export default Checkout;
