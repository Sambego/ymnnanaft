import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code6 = () => {
  const codeExample =
    'const canvas = document.querySelector("canvas");\nconst context = canvas.getContext("2d");\n\ndocument.querySelector("button").addEventListener("mousedown", event => {\n  event.preventDefault();\n\n  context.drawImage(\n    document.querySelector("video"),\n    0,\n    0,\n    canvas.clientWidth,\n    canvas.clientHeight\n  );\n\n  document.querySelector("img").src = canvas.toDataURL(\n    "image/png"\n  );\n});';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code6;
