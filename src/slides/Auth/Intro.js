import React from "react";
import Slide from "../../components/Slide";
import Columns from "../../components/Columns";
import Subtitle from "../../components/Subtitle";
import Image from "../../components/Image";
import assistant from "../../images/touchid.jpeg";

const Intro = () => (
  <Slide>
    <Columns>
      <div>
        <Subtitle>Authentication</Subtitle>
      </div>
      <Image
        src={assistant}
        style={{
          width: "50vw",
          height: "100vh"
        }}
        color="#c594c5"
      />
    </Columns>
  </Slide>
);

export default Intro;
