import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Steps from "../../../components/Steps";

const Demo2 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Detect movement</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <Steps />
      </div>
    </Columns>
  </Slide>
);

export default Demo2;
