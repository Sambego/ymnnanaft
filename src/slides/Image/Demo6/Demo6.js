import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import FaceFilter from "../../../components/FaceFilter";

const Demo6 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Add a moustache... over your moustache</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <FaceFilter moustache />
      </div>
    </Columns>
  </Slide>
);

export default Demo6;
