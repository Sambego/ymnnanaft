import React, { Component } from "react";

import Phone from "../Phone";
import Icon from "../Icon";
import steps from "../../images/steps.svg";
import styles from "./Steps.css";

export default class Steps extends Component {
  state = {
    steps: 0
  };

  constructor(props) {
    super(props);

    window.addEventListener("deviceorientation", ::this.listenForStep);
  }

  listenForStep(event) {
    this.setState(state => ({ ...state }));
    console.log(event);
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
