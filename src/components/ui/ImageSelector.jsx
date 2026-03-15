import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ImageSelector.module.css";
import Icon from "@mdi/react";
import { mdiChevronLeft , mdiChevronRight } from "@mdi/js";

function ImageSelector({ product, size="25rem" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentImage = product.images[currentIndex];

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
      <div className={styles.imageSelector}>
        {product.images.map((image, index) => {
          return (
            <button
              type="button"
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
