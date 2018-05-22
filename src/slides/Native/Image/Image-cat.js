import React from "react";
import Slide from "../../../components/Slide";
import Image from "../../../components/Image";
import poes from "../../../images/poes.jpg";

const ImageSlide = () => (
  <Slide>
    <Image
      src={poes}
      style={{
        width: "100vw",
        height: "100vh"
      }}
    />
  </Slide>
);

export default ImageSlide;
