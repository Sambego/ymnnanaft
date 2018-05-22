import React, { Component } from "react";

import Icon from "../../components/Icon";
import Phone from "../../components/Phone";
import Heartrate from "../../services/Heartrate";
import heart from "../../images/heart.svg";
import styles from "./Heartrate.css";

export default class HeartrateComponent extends Component {
  constructor(props) {
    super(props);

    this.handleHeartrate = ::this.handleHeartrate;
  }

  state = {
    isListening: false,
    heartrate: 0
  };

  handleHeartrate = () => {
    const hr = new Heartrate();
    hr
      .getDevice({
        optionalServices: ["heart_rate"],
        filters: [{ name: "Polar H7 64877512" }]
        // acceptAllDevices: true
      })
      .then(() => {
        this.setState(state => ({ ...state, isListening: true }));

        hr.getHeartRate().then(heartrateCharectaristic => {
          heartrateCharectaristic.addEventListener(
            "characteristicvaluechanged",
            event => {
              this.setState(state => ({
                ...state,
                heartrate: Heartrate.parseHeartrate(event.target.value)
              }));
            }
          );
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <Phone>
        <div className={styles.container}>
          {!this.state.isListening && (
            <button className={styles.button} onClick={this.handleHeartrate}>
              Pair device
            </button>
          )}
          {this.state.isListening && (
            <div
              className={styles.heart}
              style={{
                "--heart-rate": `${1 / this.state.heartrate * 60}s`
              }}
            >
              <Icon src={heart} />
              <span className={styles.hr}>{this.state.heartrate}</span>
            </div>
          )}
        </div>
      </Phone>
    );
  }
}
