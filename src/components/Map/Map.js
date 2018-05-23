import React, { Component } from "react";

import Location from "../../services/Location";
import Icon from "../Icon";
import Phone from "../Phone";
import marker from "../../images/marker.svg";

import styles from "./Map.css";

export default class Map extends Component {
  state = {
    hasLocation: false
  };

  componentDidMount() {
    Location.get().then(location => {
      this.setState(state => ({
        ...state,
        ...location,
        hasLocation: true
      }));
    });
  }

  renderMap() {
    return (
      <div className={styles.map}>
        <img
          src={Location.getMap(this.state.latitude, this.state.longitude)}
          alt={this.state.city}
        />
        <Icon
          src={marker}
          style={{ width: "3rem" }}
          className={styles.marker}
        />
      </div>
    );
  }

  render() {
    return (
      <Phone>
        <div className={styles.container}>
          {!this.state.hasLocation && (
            <Icon
              src={marker}
              style={{ width: "3rem" }}
              className={styles.loader}
            />
          )}
          {this.state.hasLocation && this.renderMap()}
        </div>
      </Phone>
    );
  }
}
