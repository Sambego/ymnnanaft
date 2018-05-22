import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code2 = () => {
  const codeExample =
    "filter:\n    grayscale(var(--image-grayscale))\n    sepia(var(--image-sepia))\n    brightness(var(--image-brightness))\n    contrast(var(--image-contrast))\n    hue-rotate(var(--image-color))\n    saturate(var(--image-saturation))\n    blur(var(--image-blur));\n}";

  return (
    <Slide>
      <Code code={codeExample} lang="css" />
    </Slide>
  );
};

export default Code2;
