// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="app-div">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="img-h1">{appName}</p>
    </li>
  )
}

export default AppItem
