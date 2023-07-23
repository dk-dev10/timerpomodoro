import TaskProgress from '../taskProgress/taskProgress';
import './style.css';

const TaskCard = ({ percent = 0 }) => {
  return (
    <div className="taskBlock">
      <div className="status default"></div>
      <TaskProgress percent={percent} />
    </div>
  )
}

export default TaskCard