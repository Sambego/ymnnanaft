import React, { Component } from "react";
import PropTypes from "prop-types";

class Wave extends Component {
  static propTypes = {
    className: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  };

  static defaultProps = {
    className: "",
    width: "300px",
    height: "600px"
  };

  canvas = React.createRef();

  constructor(...args) {
    super(...args);

    this.audioContext = new window.AudioContext();
    this.points = [1, 5, 10, 5, 1];
    this.state = {
      volume: 0
    };
  }

  componentDidMount() {
    this.start();
    this.canvasContext = this.canvas.current.getContext("2d");
    this.canvasContext.canvas.width = this.canvas.current.offsetWidth;
    this.canvasContext.canvas.height = this.canvas.current.offsetHeight;
  }

  start() {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
      this.setState({ running: true });
      this.processAudioInput(stream);
      window.requestAnimationFrame(this.drawWave.bind(this));
    });
  }

  stop() {
    this.setState({ running: false });
  }

  calculateX(index) {
    // prettier-ignore
    return ((this.canvasContext.canvas.width / this.points.length) * (index + 0.5));
  }

  calculateY(index) {
    // prettier-ignore
    return (this.canvasContext.canvas.height - ((this.canvasContext.canvas.height / 2) / (100 / (this.points[index] * (this.state.volume * 50)))));
  }

  drawWave() {
    this.canvasContext.clearRect(
      0,
      0,
      this.canvasContext.canvas.width,
      this.canvasContext.canvas.height
    );

    this.canvasContext.beginPath();
    this.canvasContext.moveTo(0, this.canvasContext.canvas.height);

    this.points.forEach((point, index) => {
      if (index < this.points.length - 1) {
        // prettier-ignore
        this.canvasContext.quadraticCurveTo(
                    this.calculateX(index),
                    this.calculateY(index),
                    ((this.calculateX(index) + this.calculateX(index + 1)) / 2),
                    ((this.calculateY(index) + this.calculateY(index + 1)) / 2)
                );
      } else {
        // prettier-ignore
        this.canvasContext.quadraticCurveTo(
                    this.calculateX(index),
                    this.calculateY(index),
                    ((this.calculateX(index) + this.canvasContext.canvas.width) / 2),
                    ((this.calculateY(index) + this.canvasContext.canvas.height) / 2)
                );
      }
    });

    this.canvasContext.quadraticCurveTo(
      this.canvasContext.canvas.width,
      this.canvasContext.canvas.height,
      this.canvasContext.canvas.width,
      this.canvasContext.canvas.height
    );
    this.canvasContext.fillStyle = "#FDC2A0";
    this.canvasContext.fill();

    if (this.state.running) {
      window.requestAnimationFrame(this.drawWave.bind(this));
    }
  }

  calculateVolume(event) {
    const buffer = event.inputBuffer.getChannelData(0);
    const volume = 0;
    let total = 0;

    buffer.forEach(sample => {
      total += sample * sample;
    });

    const rms = Math.sqrt(total / buffer.length);

    this.setState({ volume: Math.max(rms, volume) });
  }

  processAudioInput(stream) {
    this.inputNode = this.audioContext.createMediaStreamSource(stream);
    this.audioProcessorNode = this.audioContext.createScriptProcessor(256);
    this.audioProcessorNode.onaudioprocess = this.calculateVolume.bind(this);
    this.inputNode.connect(this.audioProcessorNode);
    this.inputNode.connect(this.audioProcessorNode);
    this.audioProcessorNode.connect(this.audioContext.destination);
  }

  render() {
    return (
      <canvas
        className={this.props.className}
        ref={this.canvas}
        width={this.props.width}
        height={this.props.height}
      />
    );
  }
}

export default Wave;
