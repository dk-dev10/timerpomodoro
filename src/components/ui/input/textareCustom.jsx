import { TextareaAutosize } from '@mui/material';

import './input.css'


const TextareCustom = ({ ...other }) => {

  return (
    <TextareaAutosize className={`textareaCustom inputCustom`} {...other} />
  )
}

export default TextareCustom