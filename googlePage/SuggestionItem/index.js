// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onSearchItem} = props
  const {suggestion} = suggestionDetails
  const onSearch = () => {
    onSearchItem(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="sug-name">{suggestion}</p>
      <button type="button" value={suggestion} onClick={onSearch}>
        <img
          className="arrowImg"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
