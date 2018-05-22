import React from "react";
import Slide from "../../../components/Slide";
import Icon from "../../../components/Icon";
import Subtitle from "../../../components/Subtitle";
import strava from "../../../images/strava.svg";
import runkeeper from "../../../images/runkeeper.svg";
import health from "../../../images/health.svg";
import fitbit from "../../../images/fitbit.svg";

const Health = () => (
  <Slide>
    <div>
      <Subtitle>Health</Subtitle>
      <div>
        <Icon
          src={strava}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={runkeeper}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={health}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={fitbit}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block"
          }}
        />
      </div>
    </div>
  </Slide>
);

export default Health;
