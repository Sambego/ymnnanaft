import React from "react";
import PropTypes from "prop-types";
import styles from "./sound.css";

const Sound = ({ onClick, style }) => (
  <button className={styles.sound} onClick={onClick} style={style} />
);

Sound.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object
};

export default Sound;
