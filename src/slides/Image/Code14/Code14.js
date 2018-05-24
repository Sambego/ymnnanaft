import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code14 = () => {
  const codeExample =
    'makeGrayScale = () => {\n  const imageData = canvas.context.getImageData(0, 0, width, height);\n  const data = imageData.data;\n\n  for (let i = 0; i < data.length; i += 4) {\n    const red = data[i];\n    const green = data[i + 1];\n    const blue = data[i + 2];\n    const average = (red + green + blue) / 3;\n\n    imageData.data[i] = average;\n    imageData.data[i + 1] = average;\n    imageData.data[i + 2] = average;\n  }\n\n  canvas.context.putImageData(imageData, 0, 0);\n  document.querySelector("img").src = elements.canvas.toDataURL("image/png");\n};';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code14;
