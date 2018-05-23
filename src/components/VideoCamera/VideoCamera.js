import React, { Component, Fragment } from "react";

import Phone from "../Phone";
import Icon from "../Icon";
import play from "../../images/play.svg";
import styles from "./VideoCamera.css";

export default class VideoCamera extends Component {
  video = React.createRef();
  mirror = React.createRef();

  state = {
    isRecording: false,
    recordingChunks: []
  };

  constructor(props) {
    super(props);

    this.handleRecordVideo = ::this.handleRecordVideo;
    this.handlePlayVideo = ::this.handlePlayVideo;
  }

  componentDidMount() {
    window.navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true
      })
      .then(stream => {
        this.mirror.current.srcObject = stream;

        this.recorder = new window.MediaRecorder(stream);
        this.recorder.ondataavailable = ::this.saveRecordingChunk;
        this.recorder.onstop = ::this.saveRecording;
      });
  }

  saveRecordingChunk(event) {
    this.state.recordingChunks.push(event.data);
  }

  saveRecording() {
    this.setState(state => ({
      ...state,
      recordingUrl: URL.createObjectURL(
        new window.Blob(this.state.recordingChunks, {
          type: "video/webm"
        })
      ),
      recordingChunks: []
    }));
  }

  stopRecording() {
    this.recorder.stop();
    this.setState(state => ({ ...state, isRecording: false }));
  }

  startRecording() {
    this.recorder.start();
    this.setState(state => ({ ...state, isRecording: true }));
  }

  handleRecordVideo() {
    if (this.state.isRecording) {
      return this.stopRecording();
    }

    return this.startRecording();
  }

  handlePlayVideo() {
    this.video.current.play();
  }

  render() {
    return (
      <Phone>
        <div className={styles.container}>
          {this.state.recordingUrl && (
            <Fragment>
              <video
                src={this.state.recordingUrl}
                className={styles.video}
                ref={this.video}
              />
              <button className={styles.play} onClick={this.handlePlayVideo}>
                <Icon
                  src={play}
                  style={{
                    margin: "3px 0 0 1px",
                    width: "2rem"
                  }}
                />
              </button>
            </Fragment>
          )}
          {!this.state.recordingUrl && (
            <Fragment>
              <video className={styles.video} ref={this.mirror} />
              <button
                className={styles.button}
                onClick={this.handleRecordVideo}
              >
                click
              </button>
            </Fragment>
          )}
        </div>
      </Phone>
    );
  }
}
