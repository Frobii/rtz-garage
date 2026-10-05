import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./HorizontalScroll.module.css";

const HorizontalScroll = ({ children, className="" }) => {
  const listRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const hasDragged = useRef(false);
  const dragThreshold = 5;

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    // listeners that live as long as the effect
    const lifetime = new AbortController();
    // window listeners that live for one drag
    let dragListeners = null;

    const endDrag = () => {
      isDown.current = false;
      dragListeners?.abort();
    };

    const handleMouseMove = (e) => {
      if (!isDown.current) return;
      const dragX = e.pageX - startX.current;

      if (!hasDragged.current) {
        if (Math.abs(dragX) < dragThreshold) return;
        hasDragged.current = true;
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
  }, []);

  return (
    <ul
      ref={listRef}
      className={`${styles.horizontalScroll} ${className}`}
    >
      {children}
    </ul>
  );
};

HorizontalScroll.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default HorizontalScroll;
