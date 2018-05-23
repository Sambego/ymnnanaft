import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code1 = () => {
  const codeExample =
    'navigator.bluetooth\n  .requestDevice({\n    optionalServices: ["heart_rate"],\n    filters: [{ name: "Polar H7" }]\n  })\n  .then(device => {\n    this.device = device;\n\n    ...\n  });';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code1;
