import React from "react";
import PropTypes from "prop-types";

import styles from "./Phone.css";

const Phone = ({ children }) => (
  <div className={styles.phone}>
    <div className={styles.screen}>{children}</div>
  </div>
);

Phone.propTypes = {
  children: PropTypes.node.isRequired
};

export default Phone;
