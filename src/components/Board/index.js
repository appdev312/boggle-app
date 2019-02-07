import React, { Component } from "react";
import _ from "lodash";

import Cell from "../Cell";
import ScoreBoard from "../ScoreBoard";
import { calculateScore, isValidWord, DICE } from "../../modules/util";
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
      ],
      letterPositions: [],
      word: "",
      results: [],
      startTime: null
    };

    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    const _randomDice = _.shuffle(_.range(25));
    const _board = [[], [], [], [], []];

    _.each(_.range(25), index => {
      _board[parseInt(index / 5)].push({
        dice: _randomDice[index],
        face: _.random(0, 5)
      });
    });

    this.setState({
      board: _board,
      letterPositions: [],
      word: ""
    });
  }

  isClickValid(row, col) {
    const { letterPositions } = this.state;

    if (letterPositions.length === 0) {
      return true;
    }

    const lastElem = letterPositions[letterPositions.length - 1];
    return (
      !(lastElem.row === row && lastElem.col === col) &&
      Math.abs(lastElem.row - row) <= 1 &&
      Math.abs(lastElem.col - col) <= 1
    );
  }

  isVisited(row, col) {
    const { letterPositions } = this.state;
    return _.findIndex(letterPositions, { row, col }) > -1;
  }

  onClickCell(row, col) {
    const { board, letterPositions, word } = this.state;

    if (!this.isClickValid(row, col)) {
      return;
    }

    letterPositions.push({
      row,
      col
    });

    this.setState({
      letterPositions,
      word: `${word}${DICE[board[row][col].dice][board[row][col].face]}`
    });
  }

  async onClickSubmit(ev) {
    ev.preventDefault();

    const { word, results } = this.state;
    const isValid = await isValidWord(word);
    if (!isValid) {
      results.push({
        score: -2,
        word
      });
    } else {
      results.push({
        score: calculateScore(word),
        word
      });
    }

    this.setState({ results });
    this.reset();
  }

  render() {
    const { board, word, results } = this.state;

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
                    isVisited={this.isVisited(row, col)}
                    onClick={() => this.onClickCell(row, col)}
                  />
                )
            )}
          </div>
        ))}
        {word}
        <div className="actions">
          <input type="button" onClick={this.onClickSubmit} value="Submit" />
        </div>
        <ScoreBoard scores={results} />
      </div>
    );
  }
}

export default Board;
