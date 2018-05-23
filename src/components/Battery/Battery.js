import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./Battery.css";

const Battery = ({ className, level }) => {
  const classes = classnames(styles.battery__inner, {
    [styles["battery__inner--low"]]: level < 0.3
  });

  return (
    <div className={`${styles.battery} ${className}`}>
      <span className={styles.battery__text}>{`${level}%`}</span>
      <div className={classes} style={{ width: `${level}%` }} />
    </div>
  );
};

Battery.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number
};

Battery.defaultProps = {
  className: "",
  level: 0
};

export default Battery;
