import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Image from "../../../components/Image";
import native from "../../../images/image.png";

const Intro = () => (
  <Slide>
    <Columns>
      <div>
        <Subtitle>Image manipulation</Subtitle>
      </div>
      <Image
        src={native}
        style={{
          width: "50vw",
          height: "100vh"
        }}
        color="#EC5f67"
      />
    </Columns>
  </Slide>
);

export default Intro;
