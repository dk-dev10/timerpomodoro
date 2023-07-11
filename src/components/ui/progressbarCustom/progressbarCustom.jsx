import './style.css'

const ProgressbarCustom = ({ percent }) => {
  return (
    <div className="progressbar">
      <div className="active" style={{width: `calc(${percent}% + 2px)`}}></div>
    </div>
  )
}

export default ProgressbarCustom