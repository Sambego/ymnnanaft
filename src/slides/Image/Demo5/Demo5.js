import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import FaceFilter from "../../../components/FaceFilter";

const Demo5 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Add a face filter</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <FaceFilter rabit />
      </div>
    </Columns>
  </Slide>
);

export default Demo5;
