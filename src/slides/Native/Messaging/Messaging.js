import React from "react";
import Slide from "../../../components/Slide";
import Icon from "../../../components/Icon";
import Subtitle from "../../../components/Subtitle";
import whatsapp from "../../../images/whatsapp.svg";
import messenger from "../../../images/messenger.svg";
import hangouts from "../../../images/hangouts.svg";
import telegram from "../../../images/telegram.svg";

const Messaging = () => (
  <Slide>
    <div>
      <Subtitle>Messaging</Subtitle>
      <div>
        <Icon
          src={whatsapp}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={messenger}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={hangouts}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={telegram}
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

export default Messaging;
