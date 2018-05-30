import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code2 = () => {
  const codeExample =
    "const utterance = new window.SpeechSynthesisUtterance('Hey everybody!');";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code2;
