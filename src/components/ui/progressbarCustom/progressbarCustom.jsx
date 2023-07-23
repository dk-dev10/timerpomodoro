import './style.css'

const ProgressbarCustom = ({ percent }) => {
  return (
    <div className="progressbar">
      <div className="active" style={{ width: `calc(${percent}% ${percent === 100 ? '+ 2px' : ''})` }}></div>
    </div>
  )
}

export default ProgressbarCustom