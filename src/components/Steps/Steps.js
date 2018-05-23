import React, { Component } from "react";

import Phone from "../Phone";
import Icon from "../Icon";
import steps from "../../images/steps.svg";
import styles from "./Steps.css";

export default class Steps extends Component {
  treshold = 4;

  state = {
    steps: 0,
    previousBeta: 0,
    previousMotion: undefined
  };

  constructor(props) {
    super(props);

    window.addEventListener("deviceorientation", ::this.listenForStep);
  }

  listenForStep(event) {
    const motion = {
      previousBeta: event.beta,
      previousMotion: event.beta >= 0 ? "up" : "down"
    };

    if (
      this.state.previousMotion !== motion.previousMotion &&
      Math.abs(this.state.previousBeta - motion.previousBeta) >= this.treshold
    ) {
      this.setState(state => ({
        ...state,
        ...motion,
        steps: this.state.steps + 1
      }));
    }
  }

  render() {
    return (
      <Phone>
        <div className={styles.container}>
          <Icon src={steps} style={{ marginBottom: "2rem", width: "10rem" }} />
          <span className={styles.label}>{this.state.steps} steps</span>
        </div>
      </Phone>
    );
  }
}
