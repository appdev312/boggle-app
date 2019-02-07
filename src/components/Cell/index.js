import React, { Component } from "react";

import { DICE } from "../../modules/util";
import "./index.css";

class Cell extends Component {
  render() {
    const { dice, face, isVisited, onClick } = this.props;

    return (
      <div className={"cell " + (isVisited ? "visited" : "")} onClick={onClick}>
        {DICE[dice][face]}
      </div>
    );
  }
}

export default Cell;
