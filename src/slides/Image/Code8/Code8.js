import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code8 = () => {
  const codeExample =
    'const faceDetector = new window.FaceDetector();\nwindow.setInterval(() => {\n  faceDetector.detect(document.querySelector("video"))\n    .then(faces => {\n      faces.forEach(face => {\n        console.log("Face:"", face.boundingBox);\n        // {\n        //   width: 100,\n        //   height: 100,\n        //   top: 100,\n        //   left: 100,\n        // }\n     });\n   });\n}, 150);';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code8;
