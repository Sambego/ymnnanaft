import React from "react";
import Slide from "../../components/Slide";
import Columns from "../../components/Columns";
import Image from "../../components/Image";
import Subtitle from "../../components/Subtitle";
import List from "../../components/List";
import Sam from "../../images/sam2.jpg";

const About = () => (
  <Slide>
    <Columns>
      <Image
        src={Sam}
        style={{
          width: "50vw",
          height: "100vh"
        }}
        color="#5FB3B3"
      />
      <div>
        <Subtitle>Sam Bellen</Subtitle>
        <List>
          <li>Software engineer</li>
          <li>madewithlove</li>
          <li>Google Developer Expert</li>
          <li>Fronteers</li>
        </List>
      </div>
    </Columns>
  </Slide>
);

export default About;
