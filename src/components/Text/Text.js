import React from "react";
import PropTypes from "prop-types";
import styles from "./text.css";

const Text = ({ children }) => <p className={styles.text}>{children}</p>;

Text.propTypes = {
  children: PropTypes.element.isRequired
};

export default Text;
