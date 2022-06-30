// Write your code here
import {Component} from 'react'
import './index.css'

const ReviewItem = props => {
  const {reviewDetails} = props
  const {imgUrl, username, companyName, description} = reviewDetails

  return (
    <div className="review-div">
      <img src={imgUrl} alt={username} />
      <p className="review-name">{username}</p>
      <p className="review-cName">{companyName}</p>
      <p className="review-cName">{description}</p>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {count: 0}

  leftButton = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevValue => ({count: prevValue.count - 1}))
    }
  }

  rightButton = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevValue => ({count: prevValue.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props
    return (
      <div className="main-div">
        <h1 className="main-h1">Reviews</h1>
        <div className="in-div">
          <button
            type="button"
            onClick={this.leftButton}
            className="arrowButton"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <ReviewItem reviewDetails={reviewsList[count]} />
          <button
            type="button"
            onClick={this.rightButton}
            className="arrowButton"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
