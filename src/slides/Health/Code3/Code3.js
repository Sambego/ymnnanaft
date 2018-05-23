import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code3 = () => {
  const codeExample =
    'characteristic.addEventListener("characteristicvaluechanged", event => {\n  // The value needs some parsing\n  console.log(event.target.value);\n});';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code3;
