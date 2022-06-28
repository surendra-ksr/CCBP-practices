// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onTyping = event => {
    const inputValue = event.target.value.length
    this.setState({count: inputValue})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-div">
        <div className="left-div">
          <h1 className="cal-title">Calculate the Letters you enter</h1>
          <label htmlFor="inputEle" className="input-title">
            Enter the phrase
          </label>
          <input
            type="text"
            id="inputEle"
            className="input-box"
            onChange={this.onTyping}
            placeholder="Enter the Phrase"
          />
          <p className="letters-num">No.of letters: {count}</p>
        </div>
        <div className="left-div">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="cal-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
