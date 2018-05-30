import React from "react";
import Slide from "../../../components/Slide";
import Subtitle from "../../../components/Subtitle";
import Speech from "../../../services/Speech";

const Demo3 = () => {
  Speech.speak("Hey everybody, I am Fiona");

  return (
    <Slide>
      <Subtitle>Hey everybody, I am Fiona!</Subtitle>
    </Slide>
  );
};

export default Demo3;
