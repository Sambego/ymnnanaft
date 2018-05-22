import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code7 = () => {
  const codeExample =
    'const [track] = stream.getVideoTracks();\nconst imageCapture = new window.ImageCapture(track);\n\nimageCapture\n  .getPhotoCapabilities()\n  .then(capabilities => \n    console.log("Image capture capabilities", capabilities));';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code7;
