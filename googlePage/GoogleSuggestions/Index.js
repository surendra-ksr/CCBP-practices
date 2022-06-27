// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchItem = val => {
    this.setState({searchInput: val})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="main-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="logo-img"
        />
        <div className="search-div">
          <div className="input-div">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="s-icon"
            />
            <input
              className="input-ele"
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="ul-div">
            {searchResults.map(eachItem => (
              <SuggestionItem
                onSearchItem={this.onSearchItem}
                key={eachItem.id}
                suggestionDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
