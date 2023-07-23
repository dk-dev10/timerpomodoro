import { TaskProgress } from '../../ui'
import TaskItem from '../../ui/taskItem/TaskItem'

import './style.css'

const tasks = [
  {
    id: 4532213,
    text: 'First',
    checked: true
  },
  {
    id: 3245653,
    text: 'Twenty',
    checked: true
  },
  {
    id: 3242345,
    text: 'Secondary',
    checked: false
  },
]

const ActiveTask = () => {
  return (
    <div className='activeTask'>
      <div className="activeTaskProgressbar">
        <TaskProgress percent={50} h1 />
      </div>
      <p className='activeTaskDescription'>
        Description to my design web site and design my
        portfolio case
      </p>

      <div className="activeTaskList">
        <ul>
          {tasks.map((task) => <TaskItem key={task.id} {...task} />)}
        </ul>
      </div>

    </div>
  )
}

export default ActiveTask