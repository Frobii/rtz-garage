import { Outlet, Link } from "react-router-dom";
import styles from "./ShopLayout.module.css";

function ShopLayout() {
  // fetch these & category images from a DB in the future
  const categories = ["wheels", "suspension", "drivetrain", "exterior", "interior"];

  return (
    <>
      <h2>Shop</h2>
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
      <Outlet />
    </>
  )
}

export default ShopLayout