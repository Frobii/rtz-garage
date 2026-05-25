import { Link } from "react-router-dom";
import styles from "./CategoryMenu.module.css";
import { useProducts } from "../../features/product/ProductContext";

function CategoryMenu() {
  const { categories, loading, error } = useProducts();

  if (loading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories: {error}</div>;

  return (
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
  );
}

export default CategoryMenu;
