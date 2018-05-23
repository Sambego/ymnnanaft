import React from "react";
import Slide from "../../../components/Slide";
import Columns from "../../../components/Columns";
import Subtitle from "../../../components/Subtitle";
import Image from "../../../components/Image";
import assistant from "../../../images/assistant.png";

const Intro = () => (
  <Slide>
    <Columns>
      <div>
        <Subtitle>Virtual assistants</Subtitle>
      </div>
      <Image
        src={assistant}
        style={{
          width: "50vw",
          height: "100vh"
        }}
        color="#F99157"
      />
    </Columns>
  </Slide>
);

export default Intro;
