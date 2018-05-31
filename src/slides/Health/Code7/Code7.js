import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code4 = () => {
  const codeExample =
    'window.addEventListener("devicemotion", event => {\n  console.log(event);\n\n  // {\n  //   acceleration {\n  //     x: 0,\n  //     y: 0,\n  //     z: 0,\n  //   },\n  //   accelerationIncludingGravity {\n  //     x: 0,\n  //     y: 0,\n  //     z: 0,\n  //   }\n  // }\n}, true);';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code4;
