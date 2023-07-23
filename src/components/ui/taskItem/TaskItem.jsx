import { useState } from 'react';
import { Dialog, DialogContent, Slider } from '@mui/material'
import Checkbox from '../checkbox/checkboxcutom'

import clock from './assets/clock-rotate-left-solid.svg'

import './style.css'

const TaskItem = (task) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const timeCustom = (num) => {
    const addZero = (n) => n < 10 ? `0${n}` : n
    let m = num % 60;
    let h = (num - m) / 60;
    let hhmm = `${addZero(h)}h:${addZero(m)}m`;
    return hhmm
  }


  return (
    <li className='taskItem' >
      <Checkbox {...task} />
      <div className="moreFn">
        <button className='taskItemBtn' onClick={handleClickOpen} >
          <img src={clock} alt="icon" width={25} height={25} />
        </button>
      </div>
      <Dialog open={open} onClose={handleClose} >
        <DialogContent sx={{ width: 'clamp(250px + 1px, 400px)', padding: '2.5rem' }} >
          <Slider
            valueLabelDisplay="auto"
            valueLabelFormat={timeCustom}
            step={15}
            min={0}
            max={1440}
            sx={{
              width: "min(50vw, 400px)",
              '& .MuiSlider-thumb': {
                color: "#6666e3"
              },
              '& .MuiSlider-track': {
                color: "#6666e3"
              },
              '& .MuiSlider-rail': {
                color: "#6666e3"
              },
              '& .MuiSlider-active': {
                color: "#6666e3"
              },
            }}
          />
        </DialogContent>
      </Dialog>
    </li>
  )
}

export default TaskItem