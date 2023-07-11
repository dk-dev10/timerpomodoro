import Header from './components/views/header/header'
import ActiveTask from './components/views/activeTask/ActiveTask'

import './index.css';
import './App.css'
import TaskItem from './components/ui/taskItem/TaskItem';
import TimerPomodoro from './components/views/Timer/TimerPomodoro';


function App() {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="taskSections">
          <div className="taskSectionItem taskSectionItemCreate">
            <TaskItem percent={12} />
            <TaskItem percent={73} />
            <TaskItem />
            <TaskItem percent={46} />
            <TaskItem percent={12} />
            <TaskItem percent={73} />
            <TaskItem />
            <TaskItem percent={46} />
          </div>
          <div className="taskSectionItem taskSectionItemACtive ">
            <TimerPomodoro />
            <ActiveTask />
          </div>
          <div className="taskSectionItem taskSectionItemDone">
            <ActiveTask />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App