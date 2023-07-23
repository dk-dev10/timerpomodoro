import { ProgressbarCustom } from '../index'

import './style.css'

const TaskProgress = ({ title = 'Task', percent = 0, h1 = false }) => {
  return (
    <div className='taskProgress' >
      <div className="progressbarContent">
        {h1 ? <h1>{title}</h1> : <p>{title}</p>}
        <p>{`${percent}%`}</p>
      </div>
      <ProgressbarCustom percent={percent} />
    </div>
  )
}

export default TaskProgress