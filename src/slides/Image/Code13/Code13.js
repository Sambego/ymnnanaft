import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code13 = () => {
  const codeExample =
    "// To start recording\nrecorder.start();\n\n// To stop recording\nrecorder.stop();";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code13;
