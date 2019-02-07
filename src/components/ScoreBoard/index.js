import React, { Component } from "react";
import _ from "lodash";

class ScoreBoard extends Component {
  calcTotalScore() {
    const { scores } = this.props;

    return _.sumBy(scores, "score");
  }

  render() {
    const { scores } = this.props;

    return (
      <div className="score-board">
        <ul>
          {scores.map((score, index) => (
            <li key={index}>
              <strong>Score: </strong> {score.score}, <strong>Word: </strong>{" "}
              {score.word}
            </li>
          ))}
        </ul>

        {this.calcTotalScore()}
      </div>
    );
  }
}

export default ScoreBoard;
