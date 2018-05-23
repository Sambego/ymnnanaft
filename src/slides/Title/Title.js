import React from "react";
import Slide from "../../components/Slide";
import Title from "../../components/Title";

const TitleSlide = () => (
  <Slide style={{ background: "#5FB3B3" }}>
    <Title>
      You might not need a native app for that!{" "}
      <span role="img" aria-label="scream emoji">
        😱
      </span>
    </Title>
  </Slide>
);

export default TitleSlide;
