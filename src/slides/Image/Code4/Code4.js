import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code4 = () => {
  const codeExample =
    ".then(stream => {\n    document.querySelector('video').srcObject = stream;\n});";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code4;
