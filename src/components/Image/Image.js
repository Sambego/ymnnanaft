import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import styles from "./image.css";

const Image = ({ src, style, color }) => {
  const classes = classnames(styles.image, {
    [styles.overlay]: color
  });

  return (
    <div
      style={{
        ...style,
        backgroundImage: `url(${src})`,
        backgroundColor: color
      }}
      className={classes}
    />
  );
};

Image.propTypes = {
  color: PropTypes.string,
  style: PropTypes.shape({}),
  src: PropTypes.string.isRequired
};

Image.defaultProps = {
  color: "transparent",
  style: {}
};

export default Image;
