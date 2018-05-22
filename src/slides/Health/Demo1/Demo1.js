import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Heartrate from "../../../components/Heartrate";

const Demo1 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Heart-rate monitor</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <Heartrate />
      </div>
    </Columns>
  </Slide>
);

export default Demo1;
