import Header from './components/views/header/header'
import ActiveTask from './components/views/activeTask/ActiveTask'

import TaskCard from './components/ui/taskCard/TaskCard';
import TimerPomodoro from './components/views/Timer/TimerPomodoro';

import SectionWrapper from './components/ui/SectionWrapper/SectionWrapper';

import './index.css';
import './App.css'


function App() {
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
            </SectionWrapper>
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