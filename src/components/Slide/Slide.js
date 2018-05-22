import React from "react";
import PropTypes from "prop-types";
import styles from "./slide.css";

const Slide = ({ children }) => <div className={styles.slide}>{children}</div>;

Slide.propTypes = {
  children: PropTypes.element.isRequired
};

export default Slide;
