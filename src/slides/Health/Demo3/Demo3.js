import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Map from "../../../components/Map";

const Demo3 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Track location</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <Map />
      </div>
    </Columns>
  </Slide>
);

export default Demo3;
