import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import InstaSam from "../../../components/InstaSam";

const Demo2 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Take a picture with filters</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <InstaSam />
      </div>
    </Columns>
  </Slide>
);

export default Demo2;
