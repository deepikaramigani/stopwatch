// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timerElapsedInSeconds: 0}

  componentWillUnmount = () => {
    clearInterval(this.timerInterval)
  }

  onReset = () => {
    clearInterval(this.timerInterval)
    this.setState({timerElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timerInterval)
  }

  startTimer = () => {
    this.timerInterval = setInterval(this.startCountDown, 1000)
  }

  startCountDown = () => {
    this.setState(prevState => ({
      timerElapsedInSeconds: prevState.timerElapsedInSeconds + 1,
    }))
  }

  renderMinutes = () => {
    const {timerElapsedInSeconds} = this.state
    const minutes = Math.floor(timerElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timerElapsedInSeconds} = this.state
    const seconds = Math.floor(timerElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="bg-container">
        <h1>Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p>Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="button-container">
            <button
              type="button"
              className="button green"
              onClick={this.startTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              className="button red"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button yellow"
              onClick={this.onReset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
