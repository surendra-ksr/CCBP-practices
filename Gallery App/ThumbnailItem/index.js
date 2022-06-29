// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imgDetails, onClickThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imgDetails
  const onThumbnail = () => {
    onClickThumbnail(id)
  }

  const activeImg = isActive ? '' : 'rem-thumbs'

  return (
    <li className="li-item">
      <button
        type="button"
        onClick={onThumbnail}
        className={`li-btn ${activeImg}`}
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
