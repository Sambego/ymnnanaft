import React from "react";
import PropTypes from "prop-types";

import Slide from "../../components/Slide";
import Subtitle from "../../components/Subtitle";

const SubTitle = ({ text }) => (
  <Slide>
    <Subtitle>{text}</Subtitle>
  </Slide>
);

SubTitle.propTypes = {
  text: PropTypes.node.isRequired
};

export default SubTitle;
