import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code3 = () => {
  const codeExample =
    "window.navigator.mediaDevices\n  .getUserMedia({\n    video: true\n  })\n  .then(stream => {\n    /* ... */\n  });";

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code3;
