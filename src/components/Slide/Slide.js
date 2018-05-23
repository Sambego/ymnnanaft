import React from "react";
import PropTypes from "prop-types";
import styles from "./slide.css";

const Slide = ({ children, style }) => (
  <div style={style} className={styles.slide}>
    {children}
  </div>
);

Slide.propTypes = {
  children: PropTypes.element.isRequired,
  style: PropTypes.shape({})
};

Slide.defaultProps = {
  style: {}
};

export default Slide;
