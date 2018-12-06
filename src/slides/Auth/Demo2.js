import React from "react";
import Slide from "../../components/Slide";
import Columns from "../../components/Columns";
import Subtitle from "../../components/Subtitle";
import TouchID from "../../components/TouchID";

const Demo1 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Web Authentication</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <TouchID />
      </div>
    </Columns>
  </Slide>
);

export default Demo1;
