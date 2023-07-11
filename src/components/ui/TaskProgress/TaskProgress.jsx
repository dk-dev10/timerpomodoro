import { ProgressbarCustom } from '../index'

import './style.css'

const TaskProgress = ({ title = 'Task', percent = 0 }) => {
  return (
    <div>
      <div className="progressbarContent">
        <p>{title}</p>
        <p>{percent}%</p>
      </div>
      <ProgressbarCustom percent={percent} />
    </div>
  )
}

export default TaskProgress