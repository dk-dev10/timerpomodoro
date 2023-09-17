import CircleButton from '../../ui/button/CircleButton';

import './style.css';

const TimerPomodoro = () => {
  return (
    <div className='timerContainer'>
      <div className='timerFnBtns'>
        <CircleButton />
        <CircleButton icon='pause' />
        <CircleButton icon='rotateArrow' />
      </div>

      <div className='timerContent'>
        <div className='timerPeriod'>
          <div className='startTime'>start - 13:00</div>
          <div className='endTime'>end - 14:00</div>
        </div>
        <div className='timerCountdown'>
          <h1>25:00</h1>
        </div>
        <div className='dividedTimes timerPeriod'>
          <p>next 05:00</p>
          <p>1/4 divided time</p>
        </div>
      </div>
    </div>
  );
};

export default TimerPomodoro;
