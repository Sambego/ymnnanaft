import React from "react";
import Slide from "../../../components/Slide";
import Icon from "../../../components/Icon";
import Subtitle from "../../../components/Subtitle";
import instagram from "../../../images/instagram.svg";
import snapchat from "../../../images/snapchat.svg";
import vsco from "../../../images/vsco.svg";
import lightroom from "../../../images/lightroom.svg";

const Image = () => (
  <Slide>
    <div>
      <Subtitle>
        Face filters <br /> and <br /> cat pictures
      </Subtitle>
      <div>
        <Icon
          src={instagram}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={snapchat}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={vsco}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={lightroom}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block"
          }}
        />
      </div>
    </div>
  </Slide>
);

export default Image;
