import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: null,
      minutes: 0,
      seconds: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.startTime.getTime() !== this.props.startTime.getTime()) {
      this.resetInterval();
    }
  }

  componentDidMount() {
    this.resetInterval();
  }

  parseTime() {
    const { startTime } = this.props;
    const now = new Date();
    const endTime = new Date(startTime.getTime() + 10 * 1000);

    const minutes = parseInt((endTime.getTime() - now.getTime()) / 1000 / 60);
    const seconds = parseInt((endTime.getTime() - now.getTime()) / 1000) % 60;

    return { minutes, seconds };
  }

  resetInterval() {
    const interval = setInterval(() => {
      const { minutes, seconds } = this.parseTime();

      if (minutes === 0 && seconds === 0) {
        this.handleTimeout();
      }

      this.setState({ minutes, seconds });
    }, 1000);

    this.setState({
      interval
    });
  }

  handleTimeout() {
    clearTimeout(this.state.interval);
    this.props.onTimeout();
  }

  render() {
    const { minutes, seconds } = this.state;

    return (
      <div className="score-board">
        <strong>Time Left:</strong> {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {seconds < 10 ? `0${seconds}` : seconds}
      </div>
    );
  }
}

export default Clock;
