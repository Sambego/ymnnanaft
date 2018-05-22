import React, { Component } from "react";
import PropTypes from "prop-types";
import Twitter from "../Twitter";
import Keyboard from "../../services/Keyboard";

class Deck extends Component {
  state = {
    slide: Number(window.location.pathname.split("/")[1]) || 0
  };

  componentWillMount() {
    this.KeyboardLeftListener = Keyboard.on("left", () =>
      this.getPreviousSlide()
    );
    this.KeyboardRightListener = Keyboard.on("right", () =>
      this.getNextSlide()
    );
    this.KeyboardUpListener = Keyboard.on("page up", () =>
      this.getPreviousSlide()
    );
    this.KeyboardDownListener = Keyboard.on("page down", () =>
      this.getNextSlide()
    );
  }

  componentWillUnmount() {
    Keyboard.off(this.KeyboardLeftListener);
    Keyboard.off(this.KeyboardRightListener);
    Keyboard.off(this.KeyboardUpListener);
    Keyboard.off(this.KeyboardDownListener);
  }

  getPreviousSlide() {
    if (this.state.slide === 0) {
      return;
    }

    this.setState({ slide: this.state.slide - 1 });
    window.history.pushState(undefined, undefined, this.state.slide);
  }

  getNextSlide() {
    if (this.state.slide === this.props.children.length - 1) {
      return;
    }

    this.setState({ slide: this.state.slide + 1 });
    window.history.pushState(undefined, undefined, this.state.slide);
  }

  renderSlide = () => this.props.children[this.state.slide];

  render() {
    return (
      <div>
        {this.renderSlide()}
        <Twitter />
      </div>
    );
  }
}

Deck.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired
};

export default Deck;
