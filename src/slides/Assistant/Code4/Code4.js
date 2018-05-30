import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code4 = () => {
  const codeExample =
    "const synth = window.speechSynthesis;\nsynth.speak(utterance);";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code4;
