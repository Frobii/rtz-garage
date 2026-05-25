import { Outlet } from "react-router-dom";
import styles from "./ShopLayout.module.css";
import CategoryMenu from "../components/ui/CategoryMenu";

function ShopLayout() {

  return (
    <>
      <CategoryMenu />
      <div className={styles.shopContent}>
        <Outlet />
      </div>
    </>
  );
}

export default ShopLayout;
