import React, { Component } from "react";

import "./index.css";

const DICE = [
  ["a", "a", "a", "f", "r", "s"],
  ["a", "a", "e", "e", "e", "e"],
  ["a", "a", "f", "i", "r", "s"],
  ["a", "d", "e", "n", "n", "n"],
  ["a", "e", "e", "e", "e", "m"],
  ["a", "e", "e", "g", "m", "u"],
  ["a", "e", "g", "m", "n", "n"],
  ["a", "f", "i", "r", "s", "y"],
  ["b", "j", "k", "q", "x", "z"],
  ["c", "c", "e", "n", "s", "t"],
  ["c", "e", "i", "i", "l", "t"],
  ["c", "e", "i", "l", "p", "t"],
  ["c", "e", "i", "p", "s", "t"],
  ["d", "d", "h", "n", "o", "t"],
  ["d", "h", "h", "l", "o", "r"],
  ["d", "h", "l", "n", "o", "r"],
  ["d", "h", "l", "n", "o", "r"],
  ["e", "i", "i", "i", "t", "t"],
  ["e", "m", "o", "t", "t", "t"],
  ["e", "n", "s", "s", "s", "u"],
  ["f", "i", "p", "r", "s", "y"],
  ["g", "o", "r", "r", "v", "w"],
  ["i", "p", "r", "r", "r", "y"],
  ["n", "o", "o", "t", "u", "w"],
  ["o", "o", "o", "t", "t", "u"]
];

class Cell extends Component {
  render() {
    const { dice, face } = this.props;

    return <div className="cell">{DICE[dice][face]}</div>;
  }
}

export default Cell;
