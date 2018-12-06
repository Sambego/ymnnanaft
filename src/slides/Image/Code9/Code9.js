import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code9 = () => {
  const codeExample =
    '...\nface.landmarks.forEach(landmark => {\n    console.log("Landmark type:", landmark.type);\n    // "eye", "mouth"\n\n    console.log("Landmark locations:", landmark.locations);\n    // [{\n    //   x: 100,\n    //   y: 100\n    // },...]\n});';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code9;
