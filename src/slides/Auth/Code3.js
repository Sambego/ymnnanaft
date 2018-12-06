import React from "react";
import Slide from "../../components/Slide";
import Code from "../../components/Code";

const Code1 = () => {
  const codeExample =
    'const createCredentials = async event => {\n  const attestationOptions = {...};\n\n  const credential = await navigator.credentials.create(attestationOptions);\n  const assertion = await navigator.credentials.get({\n    publicKey: {\n      timeout: 60000,\n      challenge: new Uint8Array(32),\n      allowCredentials: [\n       {\n          id: credential.rawId,\n          transports: ["usb", "nfc", "ble", "internal"],\n          type: "public-key"\n        }\n      ]\n    }\n  });\n};';

  return (
    <Slide>
      <Code code={codeExample} lang="css" />
    </Slide>
  );
};

export default Code1;
