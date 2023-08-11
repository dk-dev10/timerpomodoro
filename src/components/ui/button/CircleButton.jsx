import './button.css'

import icons from './icons'

const CircleButton = ({ icon = 'play', otherClasses, ...other }) => {
  return (
    <button
      className={`customBtn circleBtn 
    ${icon === 'play' ? 'play' : ''} 
    ${otherClasses}`}
      {...other}
    >
      {
        <img src={icons[icon]} alt="icon button" />
      }
    </button>
  )
}

export default CircleButton