import { Outlet , Link } from "react-router-dom";
import styles from "./Layout.module.css";
import Cart from "../features/cart/Cart";

function Layout() {
  return (
    <>
      <header className={styles.topBanner}>
        <h1>
          <Link to="/" className={styles.siteTitleLink}>RTZ Garage</Link>
        </h1>
        <nav className={styles.navBar}>
          <Link to="/">Home</Link>
          <Link to="shop">Shop</Link>
          <Link to="media">Media</Link>
          <Link to="about">About</Link>
        </nav>
        <div className={styles.cartContainer}>
          <Cart />
        </div>
      </header>
      <main className={styles.pageContent}>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
