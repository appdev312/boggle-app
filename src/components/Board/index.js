import React, { Component } from "react";
import _ from "lodash";

import Cell from "../Cell";
import "./index.css";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null]
      ]
    };
  }

  componentDidMount() {
    this.randomize();
  }

  randomize() {
    const _randomDice = _.shuffle(_.range(25));
    const _board = [[], [], [], [], []];

    _.each(_.range(25), index => {
      _board[parseInt(index / 5)].push({
        dice: _randomDice[index],
        face: _.random(0, 5)
      });
    });

    this.setState({
      board: _board
    });
  }

  render() {
    const { board } = this.state;

    return (
      <div className="board">
        {board.map((cells, row) => (
          <div className="board__row" key={`row_${row}`}>
            {cells.map(
              (cell, col) =>
                cell && (
                  <Cell
                    key={`${row}_${col}`}
                    dice={cell.dice}
                    face={cell.face}
                  />
                )
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;
