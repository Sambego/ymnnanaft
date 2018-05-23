import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Stats from "../../components/Stats";

const StatsSlide = ({ browsers }) => (
  <Slide>
    <Stats browsers={browsers} />
  </Slide>
);

StatsSlide.propTypes = {
  browsers: PropTypes.arrayOf(
    PropTypes.oneOf(["chrome", "firefox", "edge", "safari", "opera"])
  ).isRequired
};

export default StatsSlide;
