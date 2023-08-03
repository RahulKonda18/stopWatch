import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {time: 0}

  onStart = () => {
    this.timerId = setInterval(this.fun, 1000)
  }

  fun = () => {
    this.setState(prev => ({time: prev.time + 1}))
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({time: 0})
  }

  formatTime = time => {
    let string = ''
    if (Math.floor(time / 60) < 10) {
      string += '0'
      string += Math.floor(time / 60)
      string += ':'
    } else {
      string += Math.floor(time / 60)
      string += ':'
    }
    if (time % 60 < 10) {
      string += '0'
      string += time % 60
    } else {
      string += time % 60
    }
    return string
  }

  render() {
    const {time} = this.state
    const str = this.formatTime(time)
    return (
      <div className="bg">
        <div className="stopwatch-card">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="timer-container">
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="heading">{str}</h1>
            <div>
              <button onClick={this.onStart} className="start" type="button">
                Start
              </button>
              <button onClick={this.onStop} className="stop" type="button">
                Stop
              </button>
              <button onClick={this.onReset} className="reset" type="button">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
