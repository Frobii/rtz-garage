import PropTypes from "prop-types";
import styles from "./Button.module.css";
import Icon from "@mdi/react";

function Button({ iconPath, title, width, onClick }) {
  return (
    <button
      className={styles.button}
      style={{ width: width || "auto" }}
      onClick={onClick}
    >
      {iconPath && <span><Icon path={iconPath} size={1} /></span>}
      <span>{title}</span>
    </button>
  );
}

Button.propTypes = {
  iconPath: PropTypes.string,
  title: PropTypes.node.isRequired,
  width: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
