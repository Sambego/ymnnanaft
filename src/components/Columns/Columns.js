import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import styles from "./columns.css";

const Columns = ({ children }) => {
  const renderColumns = () =>
    children.map((child, index) =>
      cloneElement(child, {
        className: styles.column,
        key: index
      })
    );

  return <div className={styles.columns}>{renderColumns()}</div>;
};

Columns.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Columns;
