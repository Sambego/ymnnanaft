import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import InstaSam from "../../../components/InstaSam";
import sam from "../../../images/sam-color.jpg";

const Demo1 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Add filters to a picture</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <InstaSam src={sam} />
      </div>
    </Columns>
  </Slide>
);

export default Demo1;
