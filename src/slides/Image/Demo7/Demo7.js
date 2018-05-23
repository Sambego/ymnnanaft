import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import VideoCamera from "../../../components/VideoCamera";

const Demo7 = () => (
  <Slide>
    <Columns>
      <div style={{ width: "50vw" }}>
        <Subtitle>Record video</Subtitle>
      </div>
      <div style={{ width: "50vw" }}>
        <VideoCamera />
      </div>
    </Columns>
  </Slide>
);

export default Demo7;
