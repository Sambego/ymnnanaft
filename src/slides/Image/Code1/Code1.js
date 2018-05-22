import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code1 = () => {
  const codeExample =
    "img {\n    filter: grayscale(var(--image-grayscale));\n}";

  return (
    <Slide>
      <Code code={codeExample} lang="css" />
    </Slide>
  );
};

export default Code1;
