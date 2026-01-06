import { Outlet, Link } from "react-router-dom";
import styles from "./ProductLayout.module.css";

function ProductLayout() {
  return (
    <>
      {/* Breadcrumbs or site banners go here, promotions, alerts, etc. */}
      <Outlet />
    </>
  );
}

export default ProductLayout;
