import React, { Component } from "react";

class ScoreHistory extends Component {
  render() {
    const { records } = this.props;

    return (
      <div className="score-board">
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              <strong>Score: </strong> {record.score}, <strong>Name: </strong>{" "}
              {record.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ScoreHistory;
