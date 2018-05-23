import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code5 = () => {
  const codeExample =
    "navigator.geolocation.getCurrentPosition(coordinates =>\n  console.log(coordinates)\n);\n\n// {\n//   coords: {\n//     latitude: 50.929581,\n//     longitude: 5.337653,\n//   }\n// }";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code5;
