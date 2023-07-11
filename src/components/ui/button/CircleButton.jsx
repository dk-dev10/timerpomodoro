import './style.css'

import icons from './icons'

const CircleButton = ({ icon = 'play' }) => {
  return (
    <button className={`circleBtn ${icon === 'play' ? 'play' : ''}`}>{
      <img src={icons[icon]} alt="icon button" />
    }</button>
  )
}

export default CircleButton