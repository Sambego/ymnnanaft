// https://medium.com/@joomiguelcunha/lets-play-with-chrome-s-face-detection-api-ca13017a958f
// chrome://flags/#enable-experimental-web-platform-features
import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Icon from "../Icon";
import Phone from "../Phone";
import ears from "../../images/ears.svg";
import moustache from "../../images/moustache.svg";

import styles from "./FaceFilter.css";

export default class FaceFilter extends Component {
  static propTypes = {
    face: PropTypes.bool,
    landmarks: PropTypes.bool,
    rabit: PropTypes.bool,
    moustache: PropTypes.bool
  };

  static defaultProps = {
    face: false,
    landmarks: false,
    rabit: false,
    moustache: false
  };

  faceDetector = new window.FaceDetector();
  container = React.createRef();
  video = React.createRef();
  state = {
    boxes: [],
    landmarks: [],
    isDetecting: true
  };

  componentDidMount() {
    window.navigator.mediaDevices
      .getUserMedia({
        video: true
      })
      .then(stream => {
        this.video.current.srcObject = stream;

        window.setTimeout(::this.detectFaces, 1500);
      });
  }

  componentWillUnmount() {
    this.setState(state => ({ ...state, isDetecting: false }));
  }

  detectLandmarks(face) {
    this.setState(state => ({
      ...state,
      landmarks: []
    }));

    face.landmarks.forEach(landmark => {
      this.setState(state => ({
        landmarks: [
          ...state.landmarks,
          {
            width: 30,
            height: 30,
            top: landmark.location.y - 15,
            left: landmark.location.x - 15,
            color: landmark.type === "eye" ? "green" : "blue",
            type: landmark.type
          }
        ]
      }));
    });
  }

  detectFaces() {
    window.setInterval(() => {
      if (this.state.isDetecting) {
        this.faceDetector
          .detect(this.video.current)
          .then(faces => {
            this.setState(state => ({
              ...state,
              boxes: []
            }));

            faces.forEach(face => {
              this.setState(state => ({
                boxes: [
                  ...state.boxes,
                  {
                    width: face.boundingBox.width,
                    height: face.boundingBox.height,
                    top: face.boundingBox.top,
                    left: face.boundingBox.left
                  }
                ]
              }));

              if (this.props.landmarks || this.props.moustache) {
                this.detectLandmarks(face);
              }
            });
          })
          .catch(() => {
            this.setState(state => ({
              ...state,
              isDetecting: false
            }));
          });
      }
    }, 150);
  }

  getDimensions(box) {
    return {
      "--box-width": `${box.width}px`,
      "--box-height": `${box.height}px`,
      "--box-top": `${box.top /
        this.video.current.videoHeight *
        this.video.current.clientHeight}px`,
      "--box-left": `${box.left /
        this.video.current.videoWidth *
        this.video.current.clientWidth}px`
    };
  }

  render() {
    return (
      <Phone>
        <div className={styles.container} ref={this.container}>
          <div className={styles["video-container"]}>
            <video autoPlay ref={this.video} className={styles.video} />
            {this.props.face &&
              this.state.boxes.map((box, index) => (
                <div
                  key={index}
                  className={styles.box}
                  style={this.getDimensions(box)}
                />
              ))}
            {this.props.landmarks &&
              this.state.landmarks.map((landmark, index) => (
                <div
                  key={index}
                  className={classnames(
                    styles.box,
                    styles[`box--${landmark.color}`]
                  )}
                  style={this.getDimensions(landmark)}
                />
              ))}
            {this.props.rabit &&
              this.state.boxes.map((box, index) => (
                <Icon
                  key={index}
                  className={styles.rabit}
                  src={ears}
                  style={this.getDimensions(box)}
                />
              ))}
            {this.props.moustache &&
              this.state.landmarks.map((landmark, index) => {
                if (landmark.type === "mouth") {
                  return (
                    <Icon
                      key={index}
                      className={styles.moustache}
                      src={moustache}
                      style={this.getDimensions(landmark)}
                    />
                  );
                }

                return null;
              })}
          </div>
        </div>
      </Phone>
    );
  }
}
