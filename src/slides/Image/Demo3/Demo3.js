import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import FaceFilter from "../../../components/FaceFilter";

const Demo3 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Face detection</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <FaceFilter face />
      </div>
    </Columns>
  </Slide>
);

export default Demo3;
