import React from "react";
import PropTypes from "prop-types";

const Icon = ({ className, src, style }) => (
  <div
    dangerouslySetInnerHTML={{ __html: src }}
    style={style}
    className={className}
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  style: PropTypes.shape({})
};

Icon.defaultProps = {
  className: "",
  style: {}
};

export default Icon;
