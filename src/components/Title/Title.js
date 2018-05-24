import React from "react";
import PropTypes from "prop-types";
import styles from "./title.css";

const Title = ({ children, style }) => (
  <h1 className={styles.title} style={style}>
    {children}
  </h1>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({})
};

Title.defaultProps = {
  style: {}
};

export default Title;
