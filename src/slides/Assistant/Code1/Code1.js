import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code1 = () => {
  const codeExample =
    'const recognition = new this.SpeechRecognition();\n\nrecognition.lang = "en-US";\nrecognition.interimResults = true;\nrecognition.maxAlternatives = 1;\nrecognition.onresult = event => console.log(event.results[0]);\nrecognition.onerror = error => console.error(error);\n\nrecognition.start();';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code1;
