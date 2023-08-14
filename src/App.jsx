import { useState } from 'react';
import Header from './components/views/header/header';
import ActiveTask from './components/views/activeTask/ActiveTask';

import TaskCard from './components/ui/taskCard/TaskCard';
import TimerPomodoro from './components/views/Timer/TimerPomodoro';

import SectionWrapper from './components/ui/SectionWrapper/SectionWrapper';

import CircleButton from './components/ui/button/CircleButton';
import AddNewTask from './components/ui/addNewTask/addNewTask';

import './index.css';
import './App.css';

function App() {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='app'>
      <Header />
      <main className='main container fullWidth'>
        <div className='taskSections'>
          <div className='taskSectionItem taskSectionItemCreate'>
            <SectionWrapper>
              <TaskCard percent={12} />
              <TaskCard percent={73} />
              <TaskCard />
            </SectionWrapper>
            <CircleButton
              icon='plus'
              otherClasses='addTaskBtn'
              onClick={handleClickOpen}
            />
            <AddNewTask handleClose={handleClose} open={open} />
          </div>
          <div className='taskSectionItem taskSectionItemACtive '>
            <TimerPomodoro />
            <SectionWrapper>
              <ActiveTask />
            </SectionWrapper>
          </div>
          <div className='taskSectionItem taskSectionItemDone'>
            <SectionWrapper>
              <TaskCard percent={100} />
            </SectionWrapper>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
