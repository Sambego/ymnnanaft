import React from "react";
import PropTypes from "prop-types";
import styles from "./subtitle.css";

const Subtitle = ({ children }) => (
  <h2 className={styles.subtitle}>{children}</h2>
);

Subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array
  ]).isRequired
};

export default Subtitle;
