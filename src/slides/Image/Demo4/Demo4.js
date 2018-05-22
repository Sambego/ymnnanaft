import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import FaceFilter from "../../../components/FaceFilter";

const Demo4 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Face and landmark detection</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <FaceFilter face landmarks />
      </div>
    </Columns>
  </Slide>
);

export default Demo4;
