import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="li-item">
      <p className="timeStamp">{timeAccessed}</p>
      <div className="li2-div">
        <img src={logoUrl} alt="domain logo" className="logoImg" />
        <div className="li3-div">
          <p className="li-title">{title}</p>
          <p className="li-url">{domainUrl}</p>
        </div>
        <button
          type="button"
          testid="delete"
          className="deleteButton"
          onClick={onDelete}
        >
          <img
            className="dImg"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
