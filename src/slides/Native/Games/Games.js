import React from "react";
import Slide from "../../../components/Slide";
import Icon from "../../../components/Icon";
import Subtitle from "../../../components/Subtitle";
import angryBirds from "../../../images/angry-birds.svg";
import candyCrush from "../../../images/candy-crush.svg";
import pokemon from "../../../images/pokemon.svg";
import monumentValley from "../../../images/monument-valley.svg";

const Games = () => (
  <Slide>
    <div>
      <Subtitle>Games</Subtitle>
      <div>
        <Icon
          src={angryBirds}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={candyCrush}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={pokemon}
          style={{
            width: "10rem",
            height: "10rem",
            display: "inline-block",
            marginRight: "2rem"
          }}
        />
        <Icon
          src={monumentValley}
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

export default Games;
