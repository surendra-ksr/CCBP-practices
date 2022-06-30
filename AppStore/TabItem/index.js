// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onTabItem} = props
  const {tabId, displayText} = tabDetails
  const onClickTab = () => {
    onTabItem(tabId)
  }

  const isSelected = isActive ? 'selectTab' : ''

  return (
    <li className="liItem">
      <button
        className={`tab-btn ${isSelected}`}
        onClick={onClickTab}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
