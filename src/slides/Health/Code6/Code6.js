import React from "react";
import Slide from "../../../components/Slide";
import Code from "../../../components/Code";

const Code6 = () => {
  const codeExample =
    'return navigator.bluetooth\n  .requestDevice({\n    optionalServices: ["battery_service"]\n  })\n  .then(device =>\n    device.gatt\n      .connect()\n      .then(server => server.getPrimaryService("battery_service"))\n      .then(service => service.getCharacteristic("battery_level"))\n      .then(characteristic => characteristic.readValue())\n      .then(value => value.getUint8(0))\n  );';

  return (
    <Slide>
      <Code code={codeExample} />
    </Slide>
  );
};

export default Code6;
