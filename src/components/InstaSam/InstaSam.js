import React, { Component } from "react";
import PropTypes from "prop-types";

import Camera from "../Camera";
import Phone from "../Phone";

import styles from "./InstaSam.css";

export default class InstaSam extends Component {
  static propTypes = {
    src: PropTypes.string
  };

  static defaultProps = {
    src: undefined
  };

  state = {
    styles: {
      grayscale: "0",
      sepia: "0",
      brightness: "1",
      contrast: "1",
      saturation: "1",
      color: "0",
      blur: "0"
    }
  };

  constructor(props) {
    super(props);

    this.handleChange = ::this.handleChange;
  }

  static formatValue(name, value) {
    switch (name) {
      case "blur":
        return `${value}px`;
      case "color":
        return `${value}deg`;
      default:
        return value;
    }
  }

  getStylesFromState() {
    return Object.keys(this.state.styles).reduce(
      (acc, style) => ({
        ...acc,
        ...{
          [`--image-${style}`]: InstaSam.formatValue(
            style,
            this.state.styles[style]
          )
        }
      }),
      {}
    );
  }

  handleChange(event) {
    event.persist();
    this.setState(state => ({
      ...state,
      styles: {
        ...state.styles,
        [event.target.name]: event.target.value
      }
    }));
  }

  render() {
    return (
      <Phone>
        <div className={styles.instasam}>
          <h2 className={styles.title}>
            Insta<span className={styles.hightlight}>Sam</span>
          </h2>
          <div className={styles["image-container"]}>
            {this.props.src ? (
              <img
                src={this.props.src}
                className={styles.image}
                alt="instasam"
                style={this.getStylesFromState()}
              />
            ) : (
              <Camera filters={this.getStylesFromState()} />
            )}
          </div>
          <form className={styles.form}>
            <label className={styles.label} htmlFor="adjust-brightness">
              Brightness
              <input
                id="adjust-brightness"
                className={styles.input}
                name="brightness"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.styles.brightness}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="adjust-contrast">
              Contrast
              <input
                id="adjust-contrast"
                className={styles.input}
                name="contrast"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.styles.contrast}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="adjust-saturation">
              Saturation
              <input
                id="adjust-saturation"
                className={styles.input}
                name="saturation"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.styles.saturation}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="adjust-color">
              Color
              <input
                id="adjust-color"
                className={styles.input}
                name="color"
                type="range"
                min="0"
                max="360"
                step="1"
                value={this.state.styles.color}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="adjust-blur">
              Blur
              <input
                id="adjust-blur"
                className={styles.input}
                name="blur"
                type="range"
                min="0"
                max="10"
                step="0.1"
                value={this.state.styles.blur}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="adjust-grayscale">
              Grayscale
              <input
                id="adjust-grayscale"
                className={styles.input}
                name="grayscale"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.styles.grayscale}
                onChange={this.handleChange}
              />
            </label>
            <label className={styles.label} htmlFor="adjust-sepia">
              Sepia
              <input
                id="adjust-sepia"
                className={styles.input}
                name="sepia"
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={this.state.styles.sepia}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
      </Phone>
    );
  }
}
