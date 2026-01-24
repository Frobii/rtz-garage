import { Outlet, Link } from "react-router-dom";
import styles from "./ShopLayout.module.css";

function ShopLayout() {
  const categories = [
    "wheels",
    "suspension",
    "drivetrain",
    "exterior",
    "interior",
    "merch"
  ];

  return (
    <>
      <nav className={styles.categoryNavigation}>
        {categories.map((category) => {
          const capitalized = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();

          return (
            <Link
              key={category}
              to={`/shop/${category}`}
            >
              {capitalized}
            </Link>
          );
        })}
      </nav>
      <div className={styles.shopContent}>
        <Outlet />
      </div>
    </>
  );
}

export default ShopLayout;
