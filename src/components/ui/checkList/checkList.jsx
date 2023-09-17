import CheckListItem from '../CheckListItem/CheckListItem';

const CheckList = ({ tasks = [], children }) => {
  return (
    <div className='activeTaskList'>
      <ul>
        {tasks.map((task) => (
          <CheckListItem key={task.text} {...task} />
        ))}
      </ul>
      {children}
    </div>
  );
};

export default CheckList;
