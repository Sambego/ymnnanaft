import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code12 = () => {
  const codeExample =
    'const saveRecording = () => {\n  const recordingBlob = new window.Blob(recordingChunks, {\n    type: "video/webm"\n  });\n\n  document.querySelector("video").src = URL.createObjectURL(recordingBlob);\n};';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code12;
