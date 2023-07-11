import { useState } from 'react';
import './style.css';

const Checkbox = ({ text = 'Default', checked = false}) => {
  const [chec, setchec] = useState(checked)

  const toggle = () => {
    setchec(check => !check)
  }

  return (
    <label className="checkboxContainer">
      <input
        type="checkbox"
        checked={chec}
        onChange={toggle}
      />
      <span className="checkboxCustom"></span>
      <span className="checkboxText">{text}</span>
    </label>
  );
};

export default Checkbox;
