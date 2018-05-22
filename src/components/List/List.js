import React, { cloneElement } from "react";
import PropTypes from "prop-types";
import styles from "./list.css";

const List = ({ children }) => {
  const renderItems = () =>
    children.map((child, index) =>
      cloneElement(child, {
        className: styles.item,
        key: index
      })
    );

  return <ul className={styles.list}>{renderItems()}</ul>;
};

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default List;
