import Header from './components/views/header/header'
import ActiveTask from './components/views/activeTask/ActiveTask'

import TaskCard from './components/ui/taskCard/TaskCard';
import TimerPomodoro from './components/views/Timer/TimerPomodoro';

import SectionWrapper from './components/ui/SectionWrapper/SectionWrapper';

import './index.css';
import './App.css'
import CircleButton from './components/ui/button/CircleButton';
import { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';
import InputTitle from './components/ui/input/inputTitle';
import TextareCustom from './components/ui/input/textareCustom';


function App() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <main>
      <Header />
      <div className="container fullWidth">
        <div className="taskSections">
          <div className="taskSectionItem taskSectionItemCreate">
            <SectionWrapper>
              <TaskCard percent={12} />
              <TaskCard percent={73} />
              <TaskCard />
              <TextareCustom placeholder='Task title' />
            </SectionWrapper>
            <CircleButton icon='plus' otherClasses='addTaskBtn' customClick={handleClickOpen} >X</CircleButton>
            <Dialog open={open} onClose={handleClose} >
              <DialogContent className='addTaskDialog' >
                <div className="taskTitle">
                  <InputTitle title='Task title' placeholder='Task Title' />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="taskSectionItem taskSectionItemACtive ">
            <TimerPomodoro />
            <SectionWrapper>
              <ActiveTask />
            </SectionWrapper>
          </div>
          <div className="taskSectionItem taskSectionItemDone">
            <SectionWrapper>
              <TaskCard percent={100} />
            </SectionWrapper>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App