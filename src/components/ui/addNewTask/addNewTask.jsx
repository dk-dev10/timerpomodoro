import { useRef, useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';

import TextareCustom from '../input/textareCustom';
import CheckList from '../checkList/checkList';
import DefaultButton from '../button/DefaultButton';
import CircleButton from '../button/CircleButton';

import './addNewTask.css';

const AddNewTask = ({ handleClose, open }) => {
  const [newCheckItem, setNewCheckItem] = useState(false);
  const [cancelAddNewCheck, setCancelAddNewCheck] = useState(true);
  const [value, setValue] = useState('');
  const ckecklistNewItem = useRef(null);
  const [checkList, setCheckList] = useState([]);

  const handleChangeNew = () => {
    setNewCheckItem(true);
    setCancelAddNewCheck(true);
    // ckecklistNewItem.focus();
  };

  const handleCloseCheckItem = () => {
    if (checkList.length === 0) {
      setNewCheckItem(false);
    }
    setCancelAddNewCheck(false);
    setValue('');
  };

  const handlAddnewCheck = () => {
    const value = ckecklistNewItem.current?.value;
    if (value.trim()) {
      setCheckList((checks) => [...checks, { checked: false, text: value }]);
      setValue('');
      ckecklistNewItem.current.value = '';
    }

    ckecklistNewItem.current.focus();

    // console.log(ckecklistNewItem);
  };

  const handleCloseDialog = () => {
    handleClose();
    handleCloseCheckItem();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      className='addNewTaskWrapper'
      fullWidth
    >
      <DialogContent className='addNewTaskContent'>
        <div className='addNewTaskMain'>
          <TextareCustom placeholder='Task title' />
          <TextareCustom placeholder='Description' minRows={3} />
          {newCheckItem ? (
            <CheckList tasks={checkList}>
              {cancelAddNewCheck ? (
                <div className='newCheckItem'>
                  <TextareCustom
                    placeholder='Task title'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    forwardedRef={ckecklistNewItem}
                    autoFocus={true}
                  />
                  <div className='fnBtns'>
                    <DefaultButton
                      className={'greenColor'}
                      onClick={handlAddnewCheck}
                    >
                      add
                    </DefaultButton>
                    <DefaultButton onClick={handleCloseCheckItem}>
                      cancel
                    </DefaultButton>
                  </div>
                </div>
              ) : (
                <CircleButton icon='plus' otherClasses='dialogAddBtn' onClick={handleChangeNew} />
              )}
            </CheckList>
          ) : null}
        </div>
        <div className='addNewTaskSidebar'>
          <DefaultButton className={'br05'}>Status</DefaultButton>
          <DefaultButton className={'br05'}>Date</DefaultButton>
          <DefaultButton className={'br05'}>Link</DefaultButton>
          <DefaultButton className={'br05'} onClick={handleChangeNew}>
            CheckList
          </DefaultButton>
        </div>

        <div className='addNewTaskBtns'>
          <DefaultButton className={'greenColor'}>Save</DefaultButton>
          <DefaultButton onClick={handleCloseDialog} className={'dangerColor'}>
            Cancel
          </DefaultButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewTask;
