import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import chrome from "../../images/chrome.svg";
import firefox from "../../images/firefox.svg";
import edge from "../../images/edge.svg";
import safari from "../../images/safari.svg";
import opera from "../../images/opera.svg";

const Stats = ({ browsers }) => {
  const browserLogos = { chrome, firefox, edge, safari, opera };

  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-around"
      }}
    >
      {browsers.map(browser => (
        <Icon
          src={browserLogos[browser]}
          style={{
            width: "10rem",
            height: "10rem"
          }}
          key={browser}
        />
      ))}
    </div>
  );
};

Stats.propTypes = {
  browsers: PropTypes.arrayOf(
    PropTypes.oneOf(["chrome", "firefox", "edge", "safari", "opera"])
  ).isRequired
};

export default Stats;
