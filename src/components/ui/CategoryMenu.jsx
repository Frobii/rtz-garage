import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CategoryMenu.module.css";
import { useProducts } from "../../features/product/ProductContext";
import Icon from "@mdi/react";
import { mdiNut } from "@mdi/js";

function CategoryMenu({ onSelect }) {
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
            onClick={onSelect}
          >
            <Icon path={mdiNut} size={1} />
            {" " + capitalized + " "}
            <Icon path={mdiNut} size={1} />
          </Link>
        );
      })}
    </nav>
  );
}

CategoryMenu.propTypes = {
  onSelect: PropTypes.func,
};

export default CategoryMenu;
