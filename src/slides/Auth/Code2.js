import React from "react";
import Slide from "../../components/Slide";
import Code from "../../components/Code";

const Code1 = () => {
  const codeExample =
    'const attestationOptions = {\n  challenge: new Uint8Array(32),\n  rp: {\n    name: "Auth0"\n  },\n  user: {\n    id: new Uint8Array(32),\n    name: "Sam Bellen",\n    displayName: "Sambego"\n  },\n  authenticatorSelection: {\n    authenticatorAttachment: "platform"\n  },\n  pubKeyCredParams: [\n    {\n      type: "public-key",\n      alg: -7\n    }\n  ]\n};';

  return (
    <Slide>
      <Code code={codeExample} lang="css" />
    </Slide>
  );
};

export default Code1;
