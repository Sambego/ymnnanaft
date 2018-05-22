import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code5 = () => {
  const codeExample =
    'const [track] = stream.getVideoTracks();\nconst imageCapture = new window.ImageCapture(track);\n\ndocument.querySelector("button").addEventListener("mousedown", event => {\n  event.preventDefault();\n\n  imageCapture.takePhoto().then(blob => {\n    document.querySelector("img").src = window.URL.createObjectURL(blob);\n    window.URL.revokeObjectURL(blob);\n  });\n});';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code5;
