import { TextareaAutosize } from '@mui/material';

import './input.css';
// import { useRef } from 'react';

const TextareCustom = ({ forwardedRef, ...other }) => {
  return (
    <TextareaAutosize
      className={`textareaCustom inputCustom`}
      {...other}
      ref={forwardedRef}
    />
  );
};

export default TextareCustom;
