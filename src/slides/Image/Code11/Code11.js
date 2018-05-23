import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code11 = () => {
  const codeExample =
    "const recordingChunks = [];\nconst saveRecordingChunk = event => {\n  recordingChunks.push(event.data);\n};";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code11;
