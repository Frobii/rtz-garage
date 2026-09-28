import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./ProductList.module.css";
import { useProducts } from "./ProductContext";
import ProductCard from "./ProductCard.jsx";

const sorters = {
  newest: (a, b) => b.uploadDate.localeCompare(a.uploadDate),
  oldest: (a, b) => a.uploadDate.localeCompare(b.uploadDate),
  "price-asc": (a, b) => a.price - b.price,
  "price-desc": (a, b) => b.price - a.price,
};

const ProductList = ({ category, horizontal = false, sort = "none"} ) => {
  const { products, loading, error } = useProducts();

  /* TODO: extract a component out of the horizontal drag logic */
  const [isDragging, setIsDragging] = useState(false);
  const listRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const dragThreshold = 5;

  useEffect(() => {
    const list = listRef.current;
    if (!horizontal || !list) return;

    // listeners that live as long as the effect
    const lifetime = new AbortController();
    // window listeners that live for one drag
    let dragListeners = null;

    const endDrag = () => {
      isDown.current = false;
      setIsDragging(false);
      dragListeners?.abort();
    };

    const handleMouseMove = (e) => {
      if (!isDown.current) return;
      const dragX = e.pageX - startX.current;

      if (!hasDragged.current) {
        if (Math.abs(dragX) < dragThreshold) return;
        hasDragged.current = true;
        setIsDragging(true);
      }

      e.preventDefault();
      list.scrollLeft = scrollLeft.current - dragX * 1.5;
    };

    const handleMouseDown = (e) => {
      if (e.button !== 0) return;
      isDown.current = true;
      hasDragged.current = false;
      startX.current = e.pageX;
      scrollLeft.current = list.scrollLeft;

      dragListeners = new AbortController();
      const { signal } = dragListeners;
      window.addEventListener("mousemove", handleMouseMove, { signal });
      window.addEventListener("mouseup", endDrag, { signal });
    };

    const handleClickCapture = (e) => {
      if (hasDragged.current) {
        e.preventDefault();
        e.stopPropagation();
        hasDragged.current = false;
      }
    };

    const { signal } = lifetime;
    list.addEventListener("mousedown", handleMouseDown, { signal });
    list.addEventListener("click", handleClickCapture, { capture: true, signal });
    list.addEventListener("dragstart", (e) => e.preventDefault(), { signal });

    return () => {
      lifetime.abort(); // removes the three list listeners
      endDrag();        // removes any window listeners and resets state
    };
  }, [horizontal, loading, error, category]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products: {error}</div>;

  const filteredProducts = category === "all"
    ? products
    : products.filter(p => p.category === category);

  if (!filteredProducts.length) {
    return <div>There are currently no {category} products, check back soon!</div>;
  }

  const compare = sorters[sort];
  const sortedProducts = compare ? [...filteredProducts].sort(compare) : filteredProducts;

  return (
    <ul
      ref={listRef}
      className={`${styles.productList} ${horizontal ? styles.horizontalScroll : ""} ${isDragging ? styles.isDragging : ""}`}
    >
      {sortedProducts.map(product => (
        <ProductCard key={product.id} product={product} size="12rem"/>
      ))}
    </ul>
  );
};

ProductList.propTypes = {
  category: PropTypes.string.isRequired,
  horizontal: PropTypes.bool.isRequired,
  sortOrder: PropTypes.string.isRequired
};

export default ProductList;
