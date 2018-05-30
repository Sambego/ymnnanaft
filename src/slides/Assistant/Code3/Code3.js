import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code2 = () => {
  const codeExample =
    'const utterance = new window.SpeechSynthesisUtterance("Hey everybody!");\nconst voices = this.synth.getVoices();\nconst voice = voices.find(v => v.name === "Fiona");\n\nutterance.voice = voice;\nutterance.rate = 0.8;\nutterance.pitch = 1.2;';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code2;
