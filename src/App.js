import React, { Component } from "react";

import Board from "./components/Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">Boggle</header>
        <div className="board-wrapper">
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
