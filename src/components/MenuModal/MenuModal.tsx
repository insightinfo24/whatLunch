import React, { ChangeEvent, Dispatch, SetStateAction, useCallback, KeyboardEvent } from 'react';
import { FaPen } from 'react-icons/fa';
import './MenuModal.scss';

interface PropTypes {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyMenu: () => void;
}

const MenuModal = ({
  setIsModal,
  modifyContents,
  setModifyContents,
  onModifyMenu,
}: PropTypes): JSX.Element => {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setModifyContents(value);
  }, [setModifyContents]);

  const onKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      onModifyMenu();
    }
  }, [onModifyMenu])

  return (
    <>
      <div className='MenuModal-Overlay' onClick={onCloseModal}></div>
      <div className='MenuModal'>
        <div className='MenuModal-Title'> 
          <div>{"Menu 수정하기"}</div>
          <FaPen />
        </div>

        <div className='MenuModal-Contents'>
          <input
            type='text'
            className='MenuModal-Contents-Input'
            value={modifyContents}
            onChange={onChange}
            placeholder='Menu 입력'
            onKeyDown={onKeyDown}
          />

          <button
            className='MenuModal-Contents-Button'
            onClick={onModifyMenu}
          >
            {"수정하기"}
          </button>
        </div>

      </div>
    </>
  )
}

export default MenuModal