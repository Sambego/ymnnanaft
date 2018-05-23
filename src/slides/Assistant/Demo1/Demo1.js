import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Assistant from "../../../components/Assistant";

const Demo1 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Virtual assistant</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <Assistant />
      </div>
    </Columns>
  </Slide>
);

export default Demo1;
