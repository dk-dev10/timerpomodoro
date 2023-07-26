import InputCustom from './input'
import './style.css'

const InputTitle = ({ title, row, ...other }) => {
  return (
    <div className={`inputTitle ${row ? 'row' : 'column'}`}  >
      <p>{title}</p>
      <InputCustom {...other} />
    </div>
  )
}

export default InputTitle