import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

const OptionItem = props => {
  const {optDetails} = props
  const {id, capitalDisplayText} = optDetails

  return (
    <option className="opt-item" value={id}>
      {capitalDisplayText}
    </option>
  )
}

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onChangeSelect = event => {
    this.setState({countryId: event.target.value})
  }

  render() {
    const {countryId} = this.state
    const nameC = countryAndCapitalsList.filter(each => each.id === countryId)
    const nameOfC = nameC[0].country

    return (
      <div className="main-div">
        <div className="in-div">
          <h1 className="main-h1">Countries And Capitals</h1>
          <div className="select-div">
            <select
              className="selectItem"
              onChange={this.onChangeSelect}
              name="capitalQ"
            >
              {countryAndCapitalsList.map(eachItem => (
                <OptionItem
                  optDetails={eachItem}
                  key={eachItem.id}
                  value={eachItem.id}
                />
              ))}
            </select>
            <p className="select-p">is capital of which country?</p>
          </div>
          <p className="c-name">{nameOfC}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
