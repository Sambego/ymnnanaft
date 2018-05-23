import React, { Component } from "react";

import Speech from "../../services/Speech";
import AI from "../../services/AI";
import Phone from "../Phone";
import Icon from "../Icon";
import mic from "../../images/micropone.svg";
import styles from "./Assistant.css";

export default class Assistant extends Component {
  state = {
    assistantIsTalking: true,
    assistant: "",
    me: ""
  };

  constructor(props) {
    super(props);

    this.handleListen = ::this.handleListen;
  }

  componentDidMount() {
    this.handleAssistantInput("Hello Sam, how are you doing?");
  }

  handleAssistantInput(input) {
    this.setState(state => ({
      ...state,
      assistant: input,
      assistantIsTalking: true
    }));

    Speech.speak(input);
  }

  handleOwnInput(input) {
    this.setState(state => ({
      ...state,
      me: input,
      assistantIsTalking: false
    }));
  }

  handleListen() {
    Speech.recognize(response => {
      this.handleOwnInput(response[0].transcript);

      if (response.isFinal) {
        this.handleAssistantInput(AI.respond(response[0].transcript));
      }
    });
  }

  render() {
    return (
      <Phone>
        <div className={styles.container}>
          {this.state.assistantIsTalking && (
            <p className={styles.text}>{this.state.assistant}</p>
          )}
          {!this.state.assistantIsTalking && (
            <p className={styles.text}>{this.state.me}</p>
          )}
          <button className={styles.button} onClick={this.handleListen}>
            <Icon src={mic} style={{ width: "3rem", margin: "0 auto" }} />
          </button>
        </div>
      </Phone>
    );
  }
}
