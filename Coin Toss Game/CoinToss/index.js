import {Component} from 'react'
import './index.css'

// Write your code here

const HeadsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {reqImg: HeadsImg, headCount: 0, tailCount: 0}

  onTossButton = () => {
    const {headCount, tailCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImg = ''
    let newHeadCount = headCount
    let newTailCount = tailCount
    if (tossResult === 0) {
      tossImg = HeadsImg
      newHeadCount += 1
    } else {
      tossImg = TailsImg
      newTailCount += 1
    }
    this.setState({
      reqImg: tossImg,
      headCount: newHeadCount,
      tailCount: newTailCount,
    })
  }

  render() {
    const {reqImg, headCount, tailCount} = this.state
    const count = headCount + tailCount

    return (
      <div className="main-div">
        <div className="in-div">
          <h1 className="main-h1">Coin Toss Game</h1>
          <p className="main-p">Heads (or) Tails</p>
          <img className="req-img" src={reqImg} alt="toss result" />
          <button
            type="button"
            onClick={this.onTossButton}
            className="tossButton"
          >
            Toss Coin
          </button>
          <div className="counts-div">
            <p className="pTotal">Total: {count}</p>
            <p className="pTotal">Heads: {headCount}</p>
            <p className="pTotal">Tails: {tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
