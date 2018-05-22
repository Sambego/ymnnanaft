import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Image from "../../../components/Image";
import native from "../../../images/native.png";

const Intro = () => (
  <Slide>
    <Columns>
      <Image
        src={native}
        style={{
          width: "50vw",
          height: "100vh"
        }}
        color="#EC5f67"
      />
      <div>
        <Subtitle>Most used apps?</Subtitle>
      </div>
    </Columns>
  </Slide>
);

export default Intro;
