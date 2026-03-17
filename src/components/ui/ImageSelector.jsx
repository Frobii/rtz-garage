import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./ImageSelector.module.css";
import Icon from "@mdi/react";
import { mdiChevronLeft , mdiChevronRight } from "@mdi/js";

function ImageSelector({ product, size="25rem" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = product.images[currentIndex];
  const scrollContainerRef = useRef(null);
  const activeThumbRef = useRef(null);

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  // Keep the selector image in view
  useEffect(() => {
    if (activeThumbRef.current) {
      activeThumbRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentIndex]);

  // Gradient the edges of images which overflow the container
  const determineSelectorGradient = () => {
    const isFirst = currentIndex === 0;
    const isLast = currentIndex === product.images.length - 1;
    const leftEdge = isFirst ? "black" : "transparent";
    const rightEdge = isLast ? "black" : "transparent";
    return `linear-gradient(to right, ${leftEdge}, black 5%, black 95%, ${rightEdge})`;
  };
  const selectorGradient = determineSelectorGradient();
  const maskImages = {
    WebkitMaskImage: selectorGradient,
    maskImage: selectorGradient
  };

  return (
    <div className={styles.imagePreview}>
      <div className={styles.carousel}>
        <Icon onClick={() => handleClick("left")} className={styles.chevron} path={mdiChevronLeft} size={3} />
        <img
          style={{ width: size, height: size }}
          className={`${styles.productImage} nonSelectable`}
          key={currentImage} // Key is auto generated unique image name
          src={currentImage}
          alt={`${product.brand} ${product.model}`}
        />
        <Icon onClick={() => handleClick("right")} className={styles.chevron} path={mdiChevronRight} size={3} />
      </div>
      <div
        ref={scrollContainerRef}
        className={styles.imageSelector}
        style={{
          width: size,
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          ...maskImages,
        }}
      >
        {product.images.map((image, index) => {
          console.log(image);
          return (
            <button
              type="button"
              ref={index === currentIndex ? activeThumbRef : null}
              onClick={() => setCurrentIndex(index)}
              key={image}
              className={styles.imageSelectorButton}
              style={{ padding: 0, border: "none", background: "none", cursor: "pointer" }}
              aria-label={`Select image of ${product.brand} ${product.model}`}
            >
              <img
                style={{
                  width: "8rem", height: "8rem",
                  border: index === currentIndex ? "var(--product-border)" : "none"
                }}
                className={`${styles.productImage} nonSelectable`}
                src={image}
                alt={`${product.brand} ${product.model}`}
              />
            </button>
          );
        }) }
      </div>
    </div>
  );
}

ImageSelector.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  size: PropTypes.string
};

export default ImageSelector;
