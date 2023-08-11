import { Dialog, DialogContent } from '@mui/material';

import TextareCustom from '../input/textareCustom';

import './addNewTask.css';
import DefaultButton from '../button/DefaultButton';
import CheckList from '../checkList/checkList';
import { useEffect, useRef, useState } from 'react';

const AddNewTask = ({ handleClose, open }) => {
  const [newCheckItem, setNewCheckItem] = useState(false);
  const [value, setValue] = useState('');
  const ckecklistNewItem = useRef(null);

  console.log(newCheckItem);

  const handleChangeNew = () => {
    setNewCheckItem(true);
    // ckecklistNewItem.focus();
  };

  useEffect(() => {
    if (!ckecklistNewItem) {
      ckecklistNewItem.focus();
    }
  }, [ckecklistNewItem]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className='addNewTaskWrapper'
      fullWidth
    >
      <DialogContent className='addNewTaskContent'>
        <div className='addNewTaskMain'>
          <div className='taskTitle'>
            <h3>Task title</h3>
            <TextareCustom placeholder='Task title' />
          </div>
          <div className='taskDescription'>
            <h3>Description</h3>
            <TextareCustom placeholder='Description' minRows={3} />
          </div>
          {newCheckItem ? (
            <CheckList>
              <TextareCustom
                placeholder='Task title'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                ref={ckecklistNewItem}
              />
            </CheckList>
          ) : null}
        </div>
        <div className='addNewTaskSidebar'>
          <h3>Options</h3>
          <div className='taskSidebarOptions'>
            <DefaultButton className={'br05'}>Status</DefaultButton>
            <DefaultButton className={'br05'}>Date</DefaultButton>
            <DefaultButton className={'br05'}>Link</DefaultButton>
            <DefaultButton className={'br05'} onClick={handleChangeNew}>
              CheckList
            </DefaultButton>
          </div>
        </div>

        <div className='addNewTaskBtns'>
          <DefaultButton className={'greenColor'}>save</DefaultButton>
          <DefaultButton onClick={handleClose} className={'dangerColor'}>
            cancel
          </DefaultButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
