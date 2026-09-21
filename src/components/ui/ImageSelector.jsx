import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./ImageSelector.module.css";
import { mdiSetNone } from "@mdi/js";

function ImageSelector({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = product.images[currentIndex];

  const [isFullScreen, setIsFullScreen] = useState(false);

  const scrollContainerRef = useRef(null);
  const activeThumbRef = useRef(null);

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

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  const fullScreenStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    objectFit: "contain",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: 9999,
    padding: "20px",
    boxSizing: "border-box",
    border: "none",
    borderRadius: 0
  };

  return (
    <div className={styles.imagePreview}>
      <button
        className={styles.displayedImage}
        onClick={() => toggleFullScreen()}
      >
        <img
          style={isFullScreen ? fullScreenStyle : null}
          className={`${styles.productImage} ${styles.mainImage} nonSelectable`}
          key={currentImage} // Key is auto generated unique image name
          src={currentImage}
          alt={`${product.brand} ${product.model}`}
        />
      </button>
      <div
        ref={scrollContainerRef}
        className={styles.imageSelector}
        style={maskImages}
      >
        {product.images.map((image, index) => {
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
                className={`${styles.productImage} ${styles.thumbnail} nonSelectable`}
                style={{ border: index === currentIndex ? "var(--product-border)" : "none" }}
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
};

export default ImageSelector;
