import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code10 = () => {
  const codeExample =
    ".then(stream => {\n    const recorder = new window.MediaRecorder(stream);\n    recorder.ondataavailable = saveRecordingChunk;\n    recorder.onstop = saveRecording;\n})";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code10;
