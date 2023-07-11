import { TaskProgress } from '../../ui'
import Checkboxcutom from '../../ui/checkbox/checkboxcutom'
import './style.css'


const ActiveTask = () => {
  return (
    <div className='activeTask'>
      <h2 className='activeTaskTitle' >Task title</h2>
      <p className='activeTaskDescription'>
        Description to my design web site and design my
        portfolio case
      </p>

      <div className="activeTaskProgressbar">
        <TaskProgress percent={50} />

      </div>
      <div className="activeTaskList">
        <ul>
          <li><Checkboxcutom text='First'  /></li>
          <li><Checkboxcutom text='Twenty' checked /></li>
          <li><Checkboxcutom text='Secondary' /></li>
        </ul>
      </div>

    </div>
  )
}

export default ActiveTask