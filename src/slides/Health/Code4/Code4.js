import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code4 = () => {
  const codeExample =
    'window.addEventListener("deviceorientation", event => {\n  console.log(event);\n\n  // {\n  //  alpha: 0,\n  //  beta: 0,\n  //  gamma: 0,\n  // }\n});';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code4;
