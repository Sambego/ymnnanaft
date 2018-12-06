import React from "react";
import Slide from "../../components/Slide";
import Code from "../../components/Code";

const Code1 = () => {
  const codeExample =
    "const createCredentials = async event => {\n  const attestationOptions = {}; // We'll see these in detail later;\n\n  try {\n    const credential = await navigator.credentials.create(attestationOptions);\n  } catch (error) {\n    console.log(error);\n  }\n};";

  return (
    <Slide>
      <Code code={codeExample} lang="css" />
    </Slide>
  );
};

export default Code1;
