import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./Camera.css";

export default class Camera extends Component {
  static propTypes = {
    filters: PropTypes.shape({
      "--image-grayscale": PropTypes.string,
      "--image-sepia": PropTypes.string,
      "--image-brightness": PropTypes.string,
      "--image-contrast": PropTypes.string,
      "--image-saturation": PropTypes.string,
      "--image-color": PropTypes.string,
      "--image-blur": PropTypes.string
    }),
    onStream: PropTypes.func,
    showButton: PropTypes.bool,
    className: PropTypes.string
  };

  static defaultProps = {
    filters: {},
    onStream: () => true,
    showButton: true,
    className: ""
  };

  canvas = React.createRef();
  video = React.createRef();
  image = React.createRef();

  state = {
    isPictureTaken: false,
    showButton: true,
    imageUrl: "#",
    width: 0,
    height: 0
  };

  constructor(props) {
    super(props);

    window.navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true
      })
      .then(stream => {
        const [track] = stream.getVideoTracks();
        this.video.current.srcObject = stream;

        this.setState(state => ({
          ...state,
          width: this.video.current.clientWidth,
          height: this.video.current.clientHeight
        }));

        this.props.onStream(stream, this.video.current);

        if (window.ImageCapture) {
          this.imageCapture = new window.ImageCapture(track);

          this.imageCapture
            .getPhotoCapabilities()
            .then(cap => console.log("image capture", cap));
        }
      });

    this.handleTakePhoto = ::this.handleTakePhoto;
  }

  handleTakePhoto() {
    if (this.imageCapture) {
      return this.imageCapture
        .takePhoto()
        .then(blob => {
          this.setState(state => ({
            ...state,
            imageUrl: window.URL.createObjectURL(blob),
            isPictureTaken: true,
            showButton: false
          }));

          window.URL.revokeObjectURL(blob);
        })
        .catch(error => console.error(error));
    }

    const context = this.canvas.current.getContext("2d");
    context.width = this.state.width;
    context.height = this.state.height;

    context.drawImage(
      this.video.current,
      0,
      0,
      this.state.width,
      this.state.height
    );

    return this.setState(state => ({
      ...state,
      imageUrl: this.canvas.current.toDataURL("image/png"),
      isPictureTaken: true,
      showButton: false
    }));
  }

  render() {
    const videoClasses = classnames(styles.video, {
      [styles["video--active"]]: !this.state.isPictureTaken
    });
    const imageClasses = classnames(styles.image, {
      [styles["image--active"]]: this.state.isPictureTaken
    });

    return (
      <div
        className={`${styles.container} ${this.props.className}`}
        style={this.props.filters}
      >
        <video ref={this.video} autoPlay className={videoClasses} muted />
        <img
          ref={this.image}
          className={imageClasses}
          alt="InstaSam"
          src={this.state.imageUrl}
        />
        <canvas
          ref={this.canvas}
          className={styles.canvas}
          width={this.state.width}
          height={this.state.height}
        />
        {this.props.showButton &&
          this.state.showButton && (
            <button className={styles.button} onClick={this.handleTakePhoto}>
              Take picture
            </button>
          )}
      </div>
    );
  }
}
