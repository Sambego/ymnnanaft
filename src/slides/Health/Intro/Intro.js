import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Image from "../../../components/Image";
import hearthGraph from "../../../images/hearth-graph.png";

const Intro = () => (
  <Slide>
    <Columns>
      <Image
        src={hearthGraph}
        style={{
          width: "50vw",
          height: "100vh"
        }}
        color="#6699CC"
      />
      <div>
        <Subtitle>Sport and Health trackers</Subtitle>
      </div>
    </Columns>
  </Slide>
);

export default Intro;
