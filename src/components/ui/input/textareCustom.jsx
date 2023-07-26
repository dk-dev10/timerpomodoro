import './style.css'
import { TextareaAutosize } from '@mui/material';


const TextareCustom = ({ ...other }) => {

  return (
    <TextareaAutosize className={`textareaCustom inputCustom`} {...other} />
  )
}

export default TextareCustom