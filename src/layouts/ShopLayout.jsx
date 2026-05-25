import { Outlet } from "react-router-dom";
import styles from "./ShopLayout.module.css";

function ShopLayout() {

  return (
    <>
      <div className={styles.shopContent}>
        <Outlet />
      </div>
    </>
  );
}

export default ShopLayout;
