import './style.css'

const InputCustom = ({ type = 'text', ...other }) => {
  return (
    <input type={type} {...other} className="inputCustom" />
  )
}

export default InputCustom