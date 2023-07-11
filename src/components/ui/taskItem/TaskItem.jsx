import TaskProgress from '../taskProgress/taskProgress';
import './style.css';

const TaskItem = ({ percent = 0 }) => {
  return (
    <div className="taskBlock">
      <div className="status"></div>
      <TaskProgress percent={percent} />
    </div>
  )
}

export default TaskItem