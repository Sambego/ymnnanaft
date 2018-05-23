import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code2 = () => {
  const codeExample =
    'return this.device.gatt\n  .connect()\n  .then(server => server.getPrimaryService("heart_rate"))\n  .then(service => service.getCharacteristic("heart_rate_measurement"))\n  .then(characteristic => {\n    characteristic.startNotifications();\n    ...\n  });';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code2;
