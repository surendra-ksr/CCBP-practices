// Write your React code here.
import {Component} from 'react'
import './index.css'

const EmojiItem = props => {
  const {emojiDetails, onEmojiClicked} = props
  const {imageUrl, name} = emojiDetails

  const onEmoji = () => {
    onEmojiClicked()
  }
  return (
    <li className="li-item">
      <button type="button" className="emoji-btn" onClick={onEmoji}>
        <img className="li-img" src={imageUrl} alt={name} />
        <p className="li-p">{name}</p>
      </button>
    </li>
  )
}

class Feedback extends Component {
  state = {clicked: false}

  onEmojiClicked = () => {
    this.setState({clicked: true})
  }

  render() {
    const {resources} = this.props
    const {clicked} = this.state
    let thankScreen
    if (clicked) {
      thankScreen = (
        <div className="in-div">
          <img src={resources.loveEmojiUrl} alt="love emoji" />
          <h1 className="h1">Thank You!</h1>
          <p className="th-p">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      )
    } else {
      thankScreen = (
        <div className="in-div">
          <h1 className="h1">
            How satisfied are you with our customer support performance
          </h1>
          <ul className="ul-div">
            {resources.emojis.map(eachItem => (
              <EmojiItem
                key={eachItem.id}
                onEmojiClicked={this.onEmojiClicked}
                emojiDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      )
    }

    return <div className="main-div">{thankScreen}</div>
  }
}

export default Feedback
