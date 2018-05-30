import React from "react";
import Slide from "../../../components/Slide";
import Subtitle from "../../../components/Subtitle";
import Speech from "../../../services/Speech";

const Demo2 = () => {
  Speech.speak("Hey everybody, I am Alex", false);

  return (
    <Slide>
      <Subtitle>Hey everybody, I am Alex!</Subtitle>
    </Slide>
  );
};

export default Demo2;
