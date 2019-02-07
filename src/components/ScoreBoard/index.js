import React, { Component } from "react";
import _ from "lodash";

export function calcTotalScore(scores) {
  return _.sumBy(scores, "score");
}
class ScoreBoard extends Component {
  calcTotalScore() {
    return calcTotalScore(this.props.scores);
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
