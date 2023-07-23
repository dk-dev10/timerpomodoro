import { useRef, useState } from 'react'

import './style.css'

const TimeSelect = () => {
  const inputRef = useRef(null);
  const [valueTime, setValueTime] = useState('')

  const handleIconClick = () => {
    inputRef.current.focus();
    // console.log(inputRef.current.stepUp());
  };

  const handleInputChange = (event) => {
    setValueTime(event.target.value);
  };


  return (
    <label className="timeSelect" >
      <input
        type="time"
        onChange={handleInputChange}
        onClick={handleIconClick}
        ref={inputRef}
        className='timeInput'
        id='tim'
      />
      <small
      >{valueTime.length == 0 ? 'time' : valueTime }</small>
    </label>
  );
};

export default TimeSelect;