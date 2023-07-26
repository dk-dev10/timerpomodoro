import './style.css'

import icons from './icons'

const CircleButton = ({ icon = 'play', otherClasses, customClick }) => {
  return (
    <button className={`circleBtn ${icon === 'play' ? 'play' : ''} ${otherClasses}`} onClick={customClick} >{
      <img src={icons[icon]} alt="icon button" />
    }</button>
  )
}

export default CircleButton