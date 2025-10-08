import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ImageCarousel.module.css";
import Icon from "@mdi/react";
import { mdiChevronLeft , mdiChevronRight } from "@mdi/js";

function ImageCarousel({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className={styles.carousel}>
      <Icon onClick={() => handleClick("left")} className={styles.chevron} path={mdiChevronLeft} size={2} />
      <img
        className={`${styles.productImage} nonSelectable`}
        key={product.images[currentIndex]} // Key is auto generated unique image name
        src={product.images[currentIndex]}
        alt={`${product.brand} ${product.model}`}
      />
      <Icon onClick={() => handleClick("right")} className={styles.chevron} path={mdiChevronRight} size={2} />
    </div>
  );
}

ImageCarousel.propTypes = {
  product: PropTypes.shape({
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ImageCarousel;
