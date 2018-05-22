import React from "react";
import Slide from "../../../components/Slide";
import List from "../../../components/List";

const Summary = () => (
  <Slide>
    <List>
      <li style={{ color: "#FAC863", fontWeight: 700 }}>Messaging</li>
      <li style={{ color: "#EC5f67", fontWeight: 700 }}>Image processing</li>
      <li style={{ color: "#6699CC", fontWeight: 700 }}>Health and sport</li>
      <li style={{ color: "#F99157", fontWeight: 700 }}>Media</li>
      <li style={{ color: "#C594C5", fontWeight: 700 }}>Games</li>
    </List>
  </Slide>
);

export default Summary;
