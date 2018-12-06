import React from "react";

import Slide from "../../components/Slide";
import poes from "../../images/poes-stickers.jpg";

const Poeslide = () => (
  <Slide>
    <div style={{ position: "relative" }}>
      <img
        src={poes}
        alt="Cat stickers"
        style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          width: "100vw",
          height: "100vh",
          background: "#5FB3B3",
          opacity: 0.5
        }}
      />
    </div>
  </Slide>
);

export default Poeslide;
