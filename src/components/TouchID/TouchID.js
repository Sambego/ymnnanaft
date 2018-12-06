import React, { Component } from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Phone from "../Phone";

import fingerprint from "../../images/fingerprint.svg";
import lock from "../../images/lock.svg";

export default class TouchID extends Component {
  static propTypes = {
    touch: PropTypes.bool
  };

  static defaultProps = {
    touch: false
  };

  state = {
    registered: false
  };

  user = {
    id: TouchID.createRandomUIntArray(),
    name: "Sam Bellen",
    displayName: "Sambego"
  };

  attestationOptions = {
    challenge: TouchID.createRandomUIntArray(),
    rp: {
      name: "Auth0"
    },
    attestation: "direct",
    authenticatorSelection: {},
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7
      }
    ]
  };

  static createRandomUIntArray() {
    const arr = new Uint8Array(32);
    window.crypto.getRandomValues(arr);

    return arr;
  }

  componentDidMount() {
    if (this.props.touch) {
      this.attestationOptions.authenticatorSelection = {
        authenticatorAttachment: "platform"
      };
    }

    this.handleRegister();
  }

  handleRegister() {
    navigator.credentials
      .create({
        publicKey: {
          ...this.attestationOptions,
          user: this.user
        }
      })
      .then(response => {
        this.setState(state => ({
          ...state,
          registered: true,
          key: response.id
        }));
      });
  }

  static renderTouch() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Icon src={fingerprint} style={{ width: "100px" }} />
        <p style={{ color: "#c594c5", display: "block", width: "100%" }}>
          TouchID to login
        </p>
      </div>
    );
  }

  static renderLock() {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Icon src={lock} style={{ width: "100px" }} />
        <p
          style={{
            color: "#c594c5",
            display: "block",
            width: "100%",
            padding: "0 20px"
          }}
        >
          Attach your authenticator device to login
        </p>
      </div>
    );
  }

  renderStart() {
    if (this.props.touch) {
      return TouchID.renderTouch();
    }

    return TouchID.renderLock();
  }

  render() {
    return (
      <Phone>
        {this.state.registered ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <p
              style={{
                color: "#c594c5",
                display: "block",
                width: "100%",
                fontWeight: "bold"
              }}
            >
              Welcome back!
            </p>
          </div>
        ) : (
          this.renderStart()
        )}
      </Phone>
    );
  }
}
